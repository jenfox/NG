import { Injectable } from "@angular/core";


export class Post{
    
    id:number;
    content:String;
    youtubeUrl:String;
    imageUrl:String;
    likes:number[];
    
    constructor(content:String )
    {
        this.content = content;
    }
}