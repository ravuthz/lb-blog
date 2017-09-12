import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    private link: string = "http://all-node-ravuthz.c9users.io:8080/api/posts";
    private posts;

    public totalItems: number = 100;
    public currentPage: number = 1;
    public itemsPerPage: number = 10;
    public smallNumPages: number = 0;
    public boundaryLinks: boolean = true;
    public directionLinks: boolean = true;

    public currentSize: number = 10;
    public sizeList: Array<any> = [10, 15, 20, 25, 50, 100];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.loadPosts(this.currentPage, this.itemsPerPage);
    }

    public loadPosts(pageNum, perPage) {
        var gotoPage = (perPage * (pageNum - 1));
        var filter = "?filter[limit]=" + perPage;
        filter += "&filter[skip]=" + gotoPage;
        filter += "&filter[order]=id,asc";
        this.http.get(this.link + filter).subscribe(data => {
            this.posts = data;
        });
        this.http.get(this.link + "/count").subscribe(data => {
            this.totalItems = data['count'];
        });
    }

    public pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);

        this.currentPage = event.page;
        this.itemsPerPage = event.itemsPerPage;

        this.loadPosts(this.currentPage, this.itemsPerPage);
    }

    public sizeChanged(event: any): void {
        console.log('Event : ' + event);
        console.log('Size changed to: ' + this.currentSize);

        if (this.currentPage > this.totalItems / this.itemsPerPage) {
            this.currentPage = (this.totalItems / this.itemsPerPage);
        }

        this.loadPosts(this.currentPage, this.itemsPerPage);
    }

}
