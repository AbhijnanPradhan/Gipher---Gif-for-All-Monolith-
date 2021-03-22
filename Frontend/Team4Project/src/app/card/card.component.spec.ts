import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import {RecommendedService} from '../services/database/recommended/recommended.service'
import { RouterTestingModule } from '@angular/router/testing';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let matCardTitle:HTMLElement;
  // let dataArray = {
  //   "data":
  //   [
  //       {
  //           "type": "gif",
  //           "id": "DhstvI3zZ598Nb1rFf",
  //           "url": "https://giphy.com/gifs/theoffice-the-office-episode-23-tv-DhstvI3zZ598Nb1rFf",
  //           "slug": "theoffice-the-office-episode-23-tv-DhstvI3zZ598Nb1rFf",
  //           "bitly_gif_url": "https://gph.is/g/Eq0nMYR",
  //           "bitly_url": "https://gph.is/g/Eq0nMYR",
  //           "embed_url": "https://giphy.com/embed/DhstvI3zZ598Nb1rFf",
  //           "username": "theoffice",
  //           "source": "",
  //           "title": "Happy Season 9 GIF by The Office",
  //           "rating": "g",
  //           "content_url": "",
  //           "source_tld": "",
  //           "source_post_url": "",
  //           "is_sticker": 0,
  //           "import_datetime": "2020-11-19 00:42:24",
  //           "trending_datetime": "2021-03-04 10:30:14",
  //           "images":
  //           {
  //               "original":
  //               {
  //                   "height": "400",
  //                   "width": "480",
  //                   "size": "7805441",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.gif",
  //                   "mp4_size": "3415716",
  //                   "mp4": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.mp4",
  //                   "webp_size": "3292810",
  //                   "webp": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.webp",
  //                   "frames": "70",
  //                   "hash": "a8f404c35a58d6334a08d4452722dfad"
  //               },
  //               "downsized":
  //               {
  //                   "height": "202",
  //                   "width": "243",
  //                   "size": "1057315",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-downsized.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-downsized.gif"
  //               },
  //               "downsized_large":
  //               {
  //                   "height": "400",
  //                   "width": "480",
  //                   "size": "5395050",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-downsized-large.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-downsized-large.gif"
  //               },
  //               "downsized_medium":
  //               {
  //                   "height": "320",
  //                   "width": "384",
  //                   "size": "3632121",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-downsized-medium.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-downsized-medium.gif"
  //               },
  //               "downsized_small":
  //               {
  //                   "height": "160",
  //                   "width": "192",
  //                   "mp4_size": "186310",
  //                   "mp4": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-downsized-small.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-downsized-small.mp4"
  //               },
  //               "downsized_still":
  //               {
  //                   "height": "202",
  //                   "width": "243",
  //                   "size": "20569",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-downsized_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-downsized_s.gif"
  //               },
  //               "fixed_height":
  //               {
  //                   "height": "200",
  //                   "width": "240",
  //                   "size": "1510366",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200.gif",
  //                   "mp4_size": "469325",
  //                   "mp4": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200.mp4",
  //                   "webp_size": "633342",
  //                   "webp": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200.webp"
  //               },
  //               "fixed_height_downsampled":
  //               {
  //                   "height": "200",
  //                   "width": "240",
  //                   "size": "135334",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200_d.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200_d.gif",
  //                   "webp_size": "84634",
  //                   "webp": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200_d.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200_d.webp"
  //               },
  //               "fixed_height_small":
  //               {
  //                   "height": "100",
  //                   "width": "120",
  //                   "size": "450588",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/100.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100.gif",
  //                   "mp4_size": "157165",
  //                   "mp4": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/100.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100.mp4",
  //                   "webp_size": "234452",
  //                   "webp": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/100.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100.webp"
  //               },
  //               "fixed_height_small_still":
  //               {
  //                   "height": "100",
  //                   "width": "120",
  //                   "size": "7880",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/100_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100_s.gif"
  //               },
  //               "fixed_height_still":
  //               {
  //                   "height": "200",
  //                   "width": "240",
  //                   "size": "22367",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200_s.gif"
  //               },
  //               "fixed_width":
  //               {
  //                   "height": "167",
  //                   "width": "200",
  //                   "size": "1082992",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200w.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w.gif",
  //                   "mp4_size": "360563",
  //                   "mp4": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200w.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w.mp4",
  //                   "webp_size": "486942",
  //                   "webp": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200w.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w.webp"
  //               },
  //               "fixed_width_downsampled":
  //               {
  //                   "height": "167",
  //                   "width": "200",
  //                   "size": "97806",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200w_d.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w_d.gif",
  //                   "webp_size": "62072",
  //                   "webp": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200w_d.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w_d.webp"
  //               },
  //               "fixed_width_small":
  //               {
  //                   "height": "84",
  //                   "width": "100",
  //                   "size": "333527",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/100w.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w.gif",
  //                   "mp4_size": "47771",
  //                   "mp4": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/100w.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w.mp4",
  //                   "webp_size": "183708",
  //                   "webp": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/100w.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w.webp"
  //               },
  //               "fixed_width_small_still":
  //               {
  //                   "height": "84",
  //                   "width": "100",
  //                   "size": "5684",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/100w_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w_s.gif"
  //               },
  //               "fixed_width_still":
  //               {
  //                   "height": "167",
  //                   "width": "200",
  //                   "size": "16366",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/200w_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w_s.gif"
  //               },
  //               "looping":
  //               {
  //                   "mp4_size": "10294204",
  //                   "mp4": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-loop.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-loop.mp4"
  //               },
  //               "original_still":
  //               {
  //                   "height": "400",
  //                   "width": "480",
  //                   "size": "111781",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy_s.gif"
  //               },
  //               "original_mp4":
  //               {
  //                   "height": "400",
  //                   "width": "480",
  //                   "mp4_size": "3415716",
  //                   "mp4": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.mp4"
  //               },
  //               "preview":
  //               {
  //                   "height": "124",
  //                   "width": "148",
  //                   "mp4_size": "45194",
  //                   "mp4": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-preview.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-preview.mp4"
  //               },
  //               "preview_gif":
  //               {
  //                   "height": "66",
  //                   "width": "79",
  //                   "size": "46747",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-preview.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-preview.gif"
  //               },
  //               "preview_webp":
  //               {
  //                   "height": "86",
  //                   "width": "104",
  //                   "size": "27094",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy-preview.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-preview.webp"
  //               },
  //               "480w_still":
  //               {
  //                   "height": "400",
  //                   "width": "480",
  //                   "size": "7805441",
  //                   "url": "https://media1.giphy.com/media/DhstvI3zZ598Nb1rFf/480w_s.jpg?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=480w_s.jpg"
  //               }
  //           },
  //           "user":
  //           {
  //               "avatar_url": "https://media3.giphy.com/avatars/theoffice/UYGpbCVMjlBo.jpg",
  //               "banner_image": "https://media3.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
  //               "banner_url": "https://media3.giphy.com/channel_assets/theoffice/rbxhsCcpp2DW.gif",
  //               "profile_url": "https://giphy.com/theoffice/",
  //               "username": "theoffice",
  //               "display_name": "The Office",
  //               "description": "The official Giphy page for The Office on Peacock.",
  //               "instagram_url": "https://instagram.com/theoffice",
  //               "website_url": "https://www.peacocktv.com/",
  //               "is_verified": true
  //           },
  //           "analytics_response_payload": "e=Z2lmX2lkPURoc3R2STN6WjU5OE5iMXJGZiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWFmMmI5ZDcxYzU0dWg3NnIycmk5NmNwNmxudmowODJzNXRrNGdtNnhiMHFzMWRvaw",
  //           "analytics":
  //           {
  //               "onload":
  //               {
  //                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&event_type=GIF_SEARCH&gif_id=DhstvI3zZ598Nb1rFf&action_type=SEEN"
  //               },
  //               "onclick":
  //               {
  //                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&event_type=GIF_SEARCH&gif_id=DhstvI3zZ598Nb1rFf&action_type=CLICK"
  //               },
  //               "onsent":
  //               {
  //                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&event_type=GIF_SEARCH&gif_id=DhstvI3zZ598Nb1rFf&action_type=SENT"
  //               }
  //           }
  //       },
  //       {
  //           "type": "gif",
  //           "id": "iDCLcl7D81aYgLLqyc",
  //           "url": "https://giphy.com/gifs/iDCLcl7D81aYgLLqyc",
  //           "slug": "iDCLcl7D81aYgLLqyc",
  //           "bitly_gif_url": "https://gph.is/g/4o6k9kD",
  //           "bitly_url": "https://gph.is/g/4o6k9kD",
  //           "embed_url": "https://giphy.com/embed/iDCLcl7D81aYgLLqyc",
  //           "username": "",
  //           "source": "https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif",
  //           "title": "happy GIF",
  //           "rating": "g",
  //           "content_url": "",
  //           "source_tld": "media.giphy.com",
  //           "source_post_url": "https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif",
  //           "is_sticker": 0,
  //           "import_datetime": "2019-06-10 17:53:34",
  //           "trending_datetime": "0000-00-00 00:00:00",
  //           "images":
  //           {
  //               "original":
  //               {
  //                   "height": "480",
  //                   "width": "480",
  //                   "size": "1552171",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.gif",
  //                   "mp4_size": "263216",
  //                   "mp4": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.mp4",
  //                   "webp_size": "673268",
  //                   "webp": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.webp",
  //                   "frames": "48",
  //                   "hash": "6ae20fe174ee3d674aecfea8da7d3a24"
  //               },
  //               "downsized":
  //               {
  //                   "height": "480",
  //                   "width": "480",
  //                   "size": "1552171",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.gif"
  //               },
  //               "downsized_large":
  //               {
  //                   "height": "480",
  //                   "width": "480",
  //                   "size": "1552171",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.gif"
  //               },
  //               "downsized_medium":
  //               {
  //                   "height": "480",
  //                   "width": "480",
  //                   "size": "1552171",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.gif"
  //               },
  //               "downsized_small":
  //               {
  //                   "height": "418",
  //                   "width": "418",
  //                   "mp4_size": "113505",
  //                   "mp4": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy-downsized-small.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-downsized-small.mp4"
  //               },
  //               "downsized_still":
  //               {
  //                   "height": "480",
  //                   "width": "480",
  //                   "size": "1552171",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy_s.gif"
  //               },
  //               "fixed_height":
  //               {
  //                   "height": "200",
  //                   "width": "200",
  //                   "size": "353120",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200.gif",
  //                   "mp4_size": "73113",
  //                   "mp4": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200.mp4",
  //                   "webp_size": "217550",
  //                   "webp": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200.webp"
  //               },
  //               "fixed_height_downsampled":
  //               {
  //                   "height": "200",
  //                   "width": "200",
  //                   "size": "45375",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200_d.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200_d.gif",
  //                   "webp_size": "28300",
  //                   "webp": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200_d.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200_d.webp"
  //               },
  //               "fixed_height_small":
  //               {
  //                   "height": "100",
  //                   "width": "100",
  //                   "size": "115069",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/100.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100.gif",
  //                   "mp4_size": "30219",
  //                   "mp4": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/100.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100.mp4",
  //                   "webp_size": "85490",
  //                   "webp": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/100.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100.webp"
  //               },
  //               "fixed_height_small_still":
  //               {
  //                   "height": "100",
  //                   "width": "100",
  //                   "size": "3173",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/100_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100_s.gif"
  //               },
  //               "fixed_height_still":
  //               {
  //                   "height": "200",
  //                   "width": "200",
  //                   "size": "9297",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200_s.gif"
  //               },
  //               "fixed_width":
  //               {
  //                   "height": "200",
  //                   "width": "200",
  //                   "size": "353120",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200w.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w.gif",
  //                   "mp4_size": "73113",
  //                   "mp4": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200w.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w.mp4",
  //                   "webp_size": "217550",
  //                   "webp": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200w.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w.webp"
  //               },
  //               "fixed_width_downsampled":
  //               {
  //                   "height": "200",
  //                   "width": "200",
  //                   "size": "45375",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200w_d.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w_d.gif",
  //                   "webp_size": "28300",
  //                   "webp": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200w_d.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w_d.webp"
  //               },
  //               "fixed_width_small":
  //               {
  //                   "height": "100",
  //                   "width": "100",
  //                   "size": "115069",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/100w.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w.gif",
  //                   "mp4_size": "30219",
  //                   "mp4": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/100w.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w.mp4",
  //                   "webp_size": "85490",
  //                   "webp": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/100w.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w.webp"
  //               },
  //               "fixed_width_small_still":
  //               {
  //                   "height": "100",
  //                   "width": "100",
  //                   "size": "3173",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/100w_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w_s.gif"
  //               },
  //               "fixed_width_still":
  //               {
  //                   "height": "200",
  //                   "width": "200",
  //                   "size": "9297",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/200w_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w_s.gif"
  //               },
  //               "looping":
  //               {
  //                   "mp4_size": "1177436",
  //                   "mp4": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy-loop.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-loop.mp4"
  //               },
  //               "original_still":
  //               {
  //                   "height": "480",
  //                   "width": "480",
  //                   "size": "32769",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy_s.gif"
  //               },
  //               "original_mp4":
  //               {
  //                   "height": "480",
  //                   "width": "480",
  //                   "mp4_size": "263216",
  //                   "mp4": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.mp4"
  //               },
  //               "preview":
  //               {
  //                   "height": "354",
  //                   "width": "354",
  //                   "mp4_size": "32016",
  //                   "mp4": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy-preview.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-preview.mp4"
  //               },
  //               "preview_gif":
  //               {
  //                   "height": "114",
  //                   "width": "114",
  //                   "size": "42812",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy-preview.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-preview.gif"
  //               },
  //               "preview_webp":
  //               {
  //                   "height": "214",
  //                   "width": "214",
  //                   "size": "47820",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/giphy-preview.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-preview.webp"
  //               },
  //               "480w_still":
  //               {
  //                   "height": "480",
  //                   "width": "480",
  //                   "size": "1552171",
  //                   "url": "https://media4.giphy.com/media/iDCLcl7D81aYgLLqyc/480w_s.jpg?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=480w_s.jpg"
  //               }
  //           },
  //           "analytics_response_payload": "e=Z2lmX2lkPWlEQ0xjbDdEODFhWWdMTHF5YyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWFmMmI5ZDcxYzU0dWg3NnIycmk5NmNwNmxudmowODJzNXRrNGdtNnhiMHFzMWRvaw",
  //           "analytics":
  //           {
  //               "onload":
  //               {
  //                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&event_type=GIF_SEARCH&gif_id=iDCLcl7D81aYgLLqyc&action_type=SEEN"
  //               },
  //               "onclick":
  //               {
  //                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&event_type=GIF_SEARCH&gif_id=iDCLcl7D81aYgLLqyc&action_type=CLICK"
  //               },
  //               "onsent":
  //               {
  //                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&event_type=GIF_SEARCH&gif_id=iDCLcl7D81aYgLLqyc&action_type=SENT"
  //               }
  //           }
  //       },
  //       {
  //           "type": "gif",
  //           "id": "3oz8xRF0v9WMAUVLNK",
  //           "url": "https://giphy.com/gifs/studiosoriginals-3oz8xRF0v9WMAUVLNK",
  //           "slug": "studiosoriginals-3oz8xRF0v9WMAUVLNK",
  //           "bitly_gif_url": "http://gph.is/2f8D3WS",
  //           "bitly_url": "http://gph.is/2f8D3WS",
  //           "embed_url": "https://giphy.com/embed/3oz8xRF0v9WMAUVLNK",
  //           "username": "studiosoriginals",
  //           "source": "",
  //           "title": "Happy So Excited GIF by GIPHY Studios Originals",
  //           "rating": "g",
  //           "content_url": "",
  //           "source_tld": "",
  //           "source_post_url": "",
  //           "is_sticker": 0,
  //           "import_datetime": "2016-11-18 20:44:33",
  //           "trending_datetime": "2021-03-22 01:03:34",
  //           "images":
  //           {
  //               "original":
  //               {
  //                   "height": "320",
  //                   "width": "480",
  //                   "size": "1404516",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.gif",
  //                   "mp4_size": "1824620",
  //                   "mp4": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.mp4",
  //                   "webp_size": "1479930",
  //                   "webp": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.webp",
  //                   "frames": "29",
  //                   "hash": "b1da09dced9c6623d3aeb9bd59eccd99"
  //               },
  //               "downsized":
  //               {
  //                   "height": "320",
  //                   "width": "480",
  //                   "size": "1404516",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.gif"
  //               },
  //               "downsized_large":
  //               {
  //                   "height": "320",
  //                   "width": "480",
  //                   "size": "1404516",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.gif"
  //               },
  //               "downsized_medium":
  //               {
  //                   "height": "320",
  //                   "width": "480",
  //                   "size": "1404516",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.gif"
  //               },
  //               "downsized_small":
  //               {
  //                   "height": "128",
  //                   "width": "192",
  //                   "mp4_size": "53552",
  //                   "mp4": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy-downsized-small.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-downsized-small.mp4"
  //               },
  //               "downsized_still":
  //               {
  //                   "height": "320",
  //                   "width": "480",
  //                   "size": "1404516",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy_s.gif"
  //               },
  //               "fixed_height":
  //               {
  //                   "height": "200",
  //                   "width": "300",
  //                   "size": "904084",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200.gif",
  //                   "mp4_size": "379451",
  //                   "mp4": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200.mp4",
  //                   "webp_size": "514832",
  //                   "webp": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200.webp"
  //               },
  //               "fixed_height_downsampled":
  //               {
  //                   "height": "200",
  //                   "width": "300",
  //                   "size": "193514",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200_d.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200_d.gif",
  //                   "webp_size": "119328",
  //                   "webp": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200_d.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200_d.webp"
  //               },
  //               "fixed_height_small":
  //               {
  //                   "height": "100",
  //                   "width": "150",
  //                   "size": "241214",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/100.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100.gif",
  //                   "mp4_size": "75912",
  //                   "mp4": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/100.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100.mp4",
  //                   "webp_size": "149322",
  //                   "webp": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/100.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100.webp"
  //               },
  //               "fixed_height_small_still":
  //               {
  //                   "height": "100",
  //                   "width": "150",
  //                   "size": "9805",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/100_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100_s.gif"
  //               },
  //               "fixed_height_still":
  //               {
  //                   "height": "200",
  //                   "width": "300",
  //                   "size": "33045",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200_s.gif"
  //               },
  //               "fixed_width":
  //               {
  //                   "height": "133",
  //                   "width": "200",
  //                   "size": "395213",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200w.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w.gif",
  //                   "mp4_size": "132983",
  //                   "mp4": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200w.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w.mp4",
  //                   "webp_size": "241856",
  //                   "webp": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200w.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w.webp"
  //               },
  //               "fixed_width_downsampled":
  //               {
  //                   "height": "133",
  //                   "width": "200",
  //                   "size": "85120",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200w_d.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w_d.gif",
  //                   "webp_size": "56722",
  //                   "webp": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200w_d.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w_d.webp"
  //               },
  //               "fixed_width_small":
  //               {
  //                   "height": "67",
  //                   "width": "100",
  //                   "size": "114303",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/100w.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w.gif",
  //                   "mp4_size": "41760",
  //                   "mp4": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/100w.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w.mp4",
  //                   "webp_size": "75606",
  //                   "webp": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/100w.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w.webp"
  //               },
  //               "fixed_width_small_still":
  //               {
  //                   "height": "67",
  //                   "width": "100",
  //                   "size": "4673",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/100w_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=100w_s.gif"
  //               },
  //               "fixed_width_still":
  //               {
  //                   "height": "133",
  //                   "width": "200",
  //                   "size": "15517",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/200w_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=200w_s.gif"
  //               },
  //               "looping":
  //               {
  //                   "mp4_size": "14800682",
  //                   "mp4": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy-loop.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-loop.mp4"
  //               },
  //               "original_still":
  //               {
  //                   "height": "320",
  //                   "width": "480",
  //                   "size": "44972",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy_s.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy_s.gif"
  //               },
  //               "original_mp4":
  //               {
  //                   "height": "320",
  //                   "width": "480",
  //                   "mp4_size": "1824620",
  //                   "mp4": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy.mp4"
  //               },
  //               "preview":
  //               {
  //                   "height": "100",
  //                   "width": "150",
  //                   "mp4_size": "42972",
  //                   "mp4": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy-preview.mp4?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-preview.mp4"
  //               },
  //               "preview_gif":
  //               {
  //                   "height": "81",
  //                   "width": "122",
  //                   "size": "48904",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy-preview.gif?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-preview.gif"
  //               },
  //               "preview_webp":
  //               {
  //                   "height": "60",
  //                   "width": "90",
  //                   "size": "23182",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy-preview.webp?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=giphy-preview.webp"
  //               },
  //               "480w_still":
  //               {
  //                   "height": "320",
  //                   "width": "480",
  //                   "size": "1404516",
  //                   "url": "https://media1.giphy.com/media/3oz8xRF0v9WMAUVLNK/480w_s.jpg?cid=af2b9d71c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&rid=480w_s.jpg"
  //               }
  //           },
  //           "user":
  //           {
  //               "avatar_url": "https://media1.giphy.com/avatars/studiosoriginals/j3JBzK5twdv8.jpg",
  //               "banner_image": "https://media1.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  //               "banner_url": "https://media1.giphy.com/headers/studiosoriginals/fHmcHCHkISg3.gif",
  //               "profile_url": "https://giphy.com/studiosoriginals/",
  //               "username": "studiosoriginals",
  //               "display_name": "GIPHY Studios Originals",
  //               "description": "",
  //               "instagram_url": "",
  //               "website_url": "https://giphy.com/studios",
  //               "is_verified": true
  //           },
  //           "analytics_response_payload": "e=Z2lmX2lkPTNvejh4UkYwdjlXTUFVVkxOSyZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWFmMmI5ZDcxYzU0dWg3NnIycmk5NmNwNmxudmowODJzNXRrNGdtNnhiMHFzMWRvaw",
  //           "analytics":
  //           {
  //               "onload":
  //               {
  //                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&event_type=GIF_SEARCH&gif_id=3oz8xRF0v9WMAUVLNK&action_type=SEEN"
  //               },
  //               "onclick":
  //               {
  //                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&event_type=GIF_SEARCH&gif_id=3oz8xRF0v9WMAUVLNK&action_type=CLICK"
  //               },
  //               "onsent":
  //               {
  //                   "url": "https://giphy-analytics.giphy.com/simple_analytics?response_id=c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok&event_type=GIF_SEARCH&gif_id=3oz8xRF0v9WMAUVLNK&action_type=SENT"
  //               }
  //           }
  //       }
  //   ],
  //   "pagination":
  //   {
  //       "total_count": 78151,
  //       "count": 3,
  //       "offset": 0
  //   },
  //   "meta":
  //   {
  //       "status": 200,
  //       "msg": "OK",
  //       "response_id": "c54uh76r2ri96cp6lnvj082s5tk4gm6xb0qs1dok"
  //   }
  // }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        RecommendedService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    matCardTitle = fixture.nativeElement.querySelector('mat-card-title');
  });
  // it('Title of matcard should be same as gif title', () => {
  //   // for (let i = 0; i < component.dataArray.length; i++) {
  //   //   expect(matCardTitle.textContent).toEqual(component.dataArray[i].title);
  //   // }

  // });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

