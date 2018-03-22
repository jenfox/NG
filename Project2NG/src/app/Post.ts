import { Injectable } from "@angular/core";


export class Post{
    
    body:string;
    
    constructor(body:string )
    {
        this.body = body;
    }
}