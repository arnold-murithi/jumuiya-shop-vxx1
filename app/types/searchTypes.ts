export interface SearchResults {
    results: Result[];
    total_results: number;
    last_visible_page: number;
    parse_status_code: number;
    created_at: number;
    updated_at: number;
    page: number;
    url: string;
    job_id: string;
    status_code: number;
    parser_type: string;
}

export interface Result {
    content: Content;
}

export interface Content {
    organic: Organic[];
    url: string;
    total_results: number;
    last_visible_page: number;
    parse_status_code: number;

}
export interface Organic {
url: string;
image: string;
price: Price;
title: string;
rating: Rating;
seller: Seller;
category: string;
product_id: number;
variants:Variants[];
}

export interface Rating {
    count: number;
    rating: number;
}

export interface Price {
    price: number;
    currency: string;
}

export interface Seller {
    name: string;
}

export interface Variants {
    url: string;
    title: string;
    product_id: string;
}

export interface Context{
key: string;
value: any;
}

export interface Link {
rel: string;
href: string;
method: string;
}

//define job and context related interfaces if needed
export interface Job {
    callback_url: string;
    client_id: number;
    context: Context[];
    created_at: string;
    domain: string;
    geo_location: null | string;
    id: string;
    limit: number;
    locale: null | string;
    pages: number;
    parse: boolean;
    parser_type: null | string;
    parsing_instructions: null | string;
    browser_instruction: null | string;
    render: null | boolean;
    url: string;
    query: string;
    source: string;
    start_page: number;
    status: string;
    storage_type: null | string;
    storage_url: null | string;
    subdomain: string;
    content_encoding: string;
    updated_at: number;
    user_agent_type: string;
    session_info: null | string;
    statuses: any[];
    client_notes: string | null;
    _links: Link[];
}