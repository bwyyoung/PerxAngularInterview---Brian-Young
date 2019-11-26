export interface Links {
    self: string;
}

export interface DisplayProperties {
    type: string;
    image: string;
}

export interface Attributes {
    urn: string;
    created_at: Date;
    updated_at: Date;
    content: string;
    properties?: any;
    display_properties: DisplayProperties;
}

export interface Links2 {
    self: string;
    related: string;
}

export interface Authors {
    links: Links2;
}

export interface Links3 {
    self: string;
    related: string;
}

export interface Publishers {
    links: Links3;
}

export interface Relationships {
    authors: Authors;
    publishers: Publishers;
}

export interface Data {
    id: string;
    type: string;
    links: Links;
    attributes: Attributes;
    relationships: Relationships;
}

export interface OutsideLinks {
    first: string;
    last: string;
}

export interface ExampleJsonTable {
    data: Data[];
    links: OutsideLinks;
}
