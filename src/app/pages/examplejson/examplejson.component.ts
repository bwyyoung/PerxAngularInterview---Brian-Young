import {Component, OnInit, ViewChild} from '@angular/core';
import {NavbarService} from '../../service/navbar.service';
import {HttpClient} from '@angular/common/http';
import {Data, ExampleJsonTable, OutsideLinks} from '../../models/tableInterface.model';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-examplejson',
    templateUrl: './examplejson.component.html',
    styleUrls: ['./examplejson.component.scss']
})

export class ExamplejsonComponent implements OnInit {
    Examplejson: ExampleJsonTable;
    tableData: Data[];
    tableData2: OutsideLinks[];
    flatobj: any;
    dataSource: MatTableDataSource<any>;
    dataSource2: MatTableDataSource<any>;
    // tslint:disable-next-line:max-line-length
    displayedColumns = ['id', 'type', 'links.self', 'attributes.urn', 'attributes.created_at', 'attributes.updated_at', 'attributes.content', 'attributes.properties', 'attributes.display_properties.type', 'attributes.display_properties.image', 'relationships.authors.links.self', 'relationships.authors.links.related', 'relationships.publishers.links.self', 'relationships.publishers.links.related'];
    displayedColumns2 = ['first', 'last'];
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(public nav: NavbarService, private httpService: HttpClient) {
        this.nav.setVisible(true);
        httpService.get<any>('../../../assets/payload/example.json').subscribe(
            result => {
                this.Examplejson = result;
                this.tableData2 = Array.of(this.Examplejson.links);
                this.tableData = this.Examplejson.data;
                this.dataSource2 = new MatTableDataSource(this.tableData2);
                this.dataSource = new MatTableDataSource(this.tableData);
                this.dataSource.sort = this.sort;
                this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
                this.dataSource.filterPredicate = (data, filter: string) => {
                    const accumulator = (currentTerm, key) => {
                        return this.nestedFilterCheck(currentTerm, data, key);
                    };
                    const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
                    const transformedFilter = filter.trim().toLowerCase();
                    return dataStr.indexOf(transformedFilter) !== -1;
                };
            });
    }

    nestedFilterCheck(search, data, key) {
        if (typeof data[key] === 'object') {
            for (const k in data[key]) {
                if (data[key][k] !== null) {
                    search = this.nestedFilterCheck(search, data[key], k);
                }
            }
        } else {
            search += data[key];
        }
        return search;
    }

    sortingDataAccessor(item, property) {
        if (property.includes('.')) {
            return property.split('.')
                .reduce((object, key) => object[key], item);
        }
        return item[property];
    }

    ngOnInit() {
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
