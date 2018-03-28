import { Injectable } from "@angular/core";


export class Post{
    
    body:String;
    
    constructor(body:String )
    {
        this.body = body;
    }
}