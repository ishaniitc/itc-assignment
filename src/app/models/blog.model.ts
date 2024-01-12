export class BlogPost {
    constructor(
      public id: number,
      public title: string,
      public content: string,
      public author: string,
      public date: Date,
      public comments?: string[]
    ) {}
  }
  