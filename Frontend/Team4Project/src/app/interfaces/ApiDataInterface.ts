export class ApiDataInterface {
    public data: Array<DataBlock> = [];
    public pagination: PaginationBlock = new PaginationBlock();
    public meta: MetaBlock = new MetaBlock();
}
class DataBlock{
    public type: string='';
    public id='';
    public url='';
    public title='';
    public rating='';
    public import_datetime: Date = new Date('2018-08-22 08:24:58');
    public images = new ImagesBlock();
    public user = new UserBlock();

    constructor(){}
}
class PaginationBlock{
    public total_count: number = 357;
    public count: number = 1;
    public offset: number = 0;
    constructor(){}
}
class MetaBlock{
    public status: number = 200;
    public msg: string = "OK";
    public response_id: string = "acv2rz9fuvpmkbfnsmch09ckpom43c5j5ek9671z";
    constructor(){}
}

class ImagesBlock{
    public original=new OriginalBlock();
    public downsized=new DownsizedBlock();
    constructor(){}
}
class OriginalBlock{
    public height: number = 480;
    public width: number = 480;
    public size: number = 26983;
    public url: string = "https://media4.giphy.com/media/fVbicO2CLACoZzRWHa/giphy.gif?cid=af2b9d710whbyliv7nbs3covmvg16e3uztoae0st2ry5bqx4&rid=giphy.gif";
    public mp4_size: number = 31634;
    public mp4: string = "https://media4.giphy.com/media/fVbicO2CLACoZzRWHa/giphy.mp4?cid=af2b9d710whbyliv7nbs3covmvg16e3uztoae0st2ry5bqx4&rid=giphy.mp4";
    public webp_size: number = 19944;
    public webp: string = "https://media4.giphy.com/media/fVbicO2CLACoZzRWHa/giphy.webp?cid=af2b9d710whbyliv7nbs3covmvg16e3uztoae0st2ry5bqx4&rid=giphy.webp";
    public frames: number = 4;
    public hash: string = "7d98b96367c5282ef0af4da3994872b6";
    constructor(){}
}
class DownsizedBlock{
    public height: number = 480;
    public width: number = 480;
    public size: number = 26983;
    public url: string = "https://media4.giphy.com/media/fVbicO2CLACoZzRWHa/giphy.gif?cid=af2b9d710whbyliv7nbs3covmvg16e3uztoae0st2ry5bqx4&rid=giphy.gif";
    constructor(){}
}

class UserBlock{
    public avatar_url: string = "https://media0.giphy.com/avatars/maniacnetflix/IO4k9mdPFDs7.png";
    public banner_image: string = "https://media0.giphy.com/headers/maniacnetflix/mFUgGzPDdeLA.png";
    public banner_url: string = "https://media0.giphy.com/headers/maniacnetflix/mFUgGzPDdeLA.png";
    public profile_url: string = "https://giphy.com/maniacnetflix/";
    public username: string = "maniacnetflix";
    public display_name: string = "MANIAC";
    public description: string = "";
    public instagram_url: string = "https://instagram.com/@maniacnetflix";
    public website_url: string = "";
    public is_verified: boolean = true;
    constructor(){}
}