import { Injectable } from "@angular/core";


export class Post{
    
    description:string;
    
    constructor(description:string )
    {
        this.description = description;
    }
}