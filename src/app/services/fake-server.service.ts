import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FakeServerService {

  messagesDetail = [
    { "messageID": '10', "messageTitle": "درخواست بررسی رزومه", "messageBodyTitle": "درخواست بررسی رزومه کارشناس بازرگانی خارجی", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.", "messgeBodySignature": "با تشکر مژگان گلشن", "sentTime": "2021-01-08T06:26:52.7357205+03:30" },
    { "messageID": '11', "messageTitle": "درخواست ثبت نظر", "messageBodyTitle": "درخواست ثبت نظر حسابدار ارشد", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد", "messgeBodySignature": "با تشکر از پیگیری شما", "sentTime": "2021-01-08T13:19:08.7471701+03:30" },
    { "messageID": '13', "messageTitle": "درخواست بررسی رزومه", "messageBodyTitle": "درخواست بررسی رزومه کارشناس توسعه نرم افزار", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", "messgeBodySignature": "منون از رسیدگی شما", "sentTime": "2021-01-10T11:33:04.7472901+03:30" },
    { "messageID": '14', "messageTitle": "مصاحبه", "messageBodyTitle": "مصاحبه کارشناس ارشد فروش", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد", "messgeBodySignature": "با تشکر مژگان گلشن", "sentTime": "2021-01-26T08:11:46.747299+03:30" },
    { "messageID": '15', "messageTitle": "ارزیابی فنی رزومه", "messageBodyTitle": "ارزیابی فنی رزومه کارشناس بازرگانی خارجی", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.", "messgeBodySignature": "با تشکر از پیگیری شما", "sentTime": "2021-01-04T10:28:13.7473101+03:30" },
    { "messageID": '16', "messageTitle": "تماس تلفنی", "messageBodyTitle": "تماس تلفنی کارشناس تست نرم‌افزار", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد", "messgeBodySignature": "ممنون از تقبل زحمت", "sentTime": "2021-01-22T02:16:46.7473187+03:30" },
    { "messageID": '17', "messageTitle": "مصاحبه", "messageBodyTitle": "مصاحبه کارشناس توسعه محصول", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", "messgeBodySignature": "منون از رسیدگی شما", "sentTime": "2021-01-11T23:10:59.7473272+03:30" },
    { "messageID": '18', "messageTitle": "ارزیابی فنی رزومه", "messageBodyTitle": "ارزیابی فنی رزومه کارشناس دیجیتال مارکتینگ", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", "messgeBodySignature": "با تشکر مژگان گلشن", "sentTime": "2021-01-05T07:16:48.7473354+03:30" },
    { "messageID": '19', "messageTitle": "دعوت به تیم استخدام", "messageBodyTitle": "دعوت به تیم استخدام کارشناس تحلیل و طراحی نرم افزار", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد", "messgeBodySignature": "با تشکر از پیگیری شما", "sentTime": "2021-01-06T04:18:50.747344+03:30" },
    { "messageID": '20', "messageTitle": "افزوده شدن رزومه جدید", "messageBodyTitle": "افزوده شدن رزومه جدید کارشناس تحلیل و طراحی نرم افزار", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.", "messgeBodySignature": "ممنون از تقبل زحمت", "sentTime": "2021-01-04T10:22:58.7473526+03:30" },
    { "messageID": '21', "messageTitle": "قبول درخواست مصاحبه", "messageBodyTitle": "قبول درخواست مصاحبه کارشناس تحلیل داده و فرآیند", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد", "messgeBodySignature": "منون از رسیدگی شما", "sentTime": "2021-01-11T11:29:45.7473611+03:30" },
    { "messageID": '22', "messageTitle": "رد شدن  کارجو", "messageBodyTitle": "رد شدن  کارجو کارشناس دیجیتال مارکتینگ", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", "messgeBodySignature": "با تشکر مژگان گلشن", "sentTime": "2021-01-20T08:10:53.7473691+03:30" },
    { "messageID": '23', "messageTitle": "لغو شدن مصاحبه", "messageBodyTitle": "لغو شدن مصاحبه پشتیبان سرور شبکه", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است", "messgeBodySignature": "با تشکر از پیگیری شما", "sentTime": "2021-01-25T21:15:55.7474104+03:30" },
    { "messageID": '24', "messageTitle": "دعوت به تیم استخدام", "messageBodyTitle": "دعوت به تیم استخدام کارشناس توسعه نرم افزار", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد", "messgeBodySignature": "ممنون از تقبل زحمت", "sentTime": "2021-01-31T05:23:51.7474221+03:30" },
    { "messageID": '25', "messageTitle": "افزوده شدن رزومه جدید", "messageBodyTitle": "افزوده شدن رزومه جدید کارشناس بازرگانی خارجی", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.", "messgeBodySignature": "منون از رسیدگی شما", "sentTime": "2021-01-25T09:36:09.7474303+03:30" },
    { "messageID": '27', "messageTitle": "رد شدن  کارجو", "messageBodyTitle": "رد شدن  کارجو کارشناس ارشد فروش", "messgeBodyText": "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد", "messgeBodySignature": "با تشکر از پیگیری شما", "sentTime": "2021-01-29T01:25:46.7474478+03:30" }

  ]
  messageCategories = [
    {
      "id": '1',
      "title": "Task",
      "displayTitle": "وظایف من"
    },
    {
      "id": '2',
      "title": "Notification",
      "displayTitle": "اعلان ها"
    },
    {
      "id": '3',
      "title": "Request",
      "displayTitle": "درخواست ها"
    }
  ];

  messages =
    [
      { "messageID": '24', "messageTitle": "دعوت به تیم استخدام", "jobTitle": "کارشناس توسعه نرم افزار", "messageCategoryID": '2', "sentTime": "2021-01-26T23:47:30.3834528+03:30", "delete": false, "bookMark": false },
      { "messageID": '19', "messageTitle": "دعوت به تیم استخدام", "jobTitle": "کارشناس تحلیل و طراحی نرم افزار", "messageCategoryID": '2', "sentTime": "2021-01-25T14:36:53.3833933+03:30", "delete": false, "bookMark": false },
      { "messageID": '27', "messageTitle": "رد شدن  کارجو", "jobTitle": "کارشناس ارشد فروش", "messageCategoryID": '2', "sentTime": "2021-01-24T03:45:31.3834793+03:30", "delete": false, "bookMark": false },
      { "messageID": '18', "messageTitle": "ارزیابی فنی رزومه", "jobTitle": "کارشناس دیجیتال مارکتینگ", "messageCategoryID": '1', "sentTime": "2021-01-22T16:33:51.3833845+03:30", "delete": false, "bookMark": false },
      { "messageID": '15', "messageTitle": "ارزیابی فنی رزومه", "jobTitle": "کارشناس بازرگانی خارجی", "messageCategoryID": '1', "sentTime": "2021-01-21T18:36:39.38336+03:30", "delete": false, "bookMark": false },
      { "messageID": '26', "messageTitle": "قبول درخواست مصاحبه", "jobTitle": "حسابدار ارشد", "messageCategoryID": '2', "sentTime": "2021-01-21T16:43:46.3834701+03:30", "delete": false, "bookMark": false },
      { "messageID": '23', "messageTitle": "لغو شدن مصاحبه", "jobTitle": "پشتیبان سرور شبکه", "messageCategoryID": '2', "sentTime": "2021-01-20T16:59:34.3834262+03:30", "delete": false, "bookMark": false },
      { "messageID": '21', "messageTitle": "قبول درخواست مصاحبه", "jobTitle": "کارشناس تحلیل داده و فرآیند", "messageCategoryID": '2', "sentTime": "2021-01-20T09:41:37.3834096+03:30", "delete": false, "bookMark": false },
      { "messageID": '12', "messageTitle": "درخواست ثبت نظر", "jobTitle": "کارشناس ارشد تولید محتوا", "messageCategoryID": '3', "sentTime": "2021-01-19T05:39:44.3833296+03:30", "delete": false, "bookMark": false },
      { "messageID": '16', "messageTitle": "تماس تلفنی", "jobTitle": "کارشناس تست نرم‌افزار", "messageCategoryID": '1', "sentTime": "2021-01-17T23:34:49.3833686+03:30", "delete": false, "bookMark": false },
      { "messageID": '17', "messageTitle": "مصاحبه", "jobTitle": "کارشناس توسعه محصول", "messageCategoryID": '1', "sentTime": "2021-01-14T16:47:32.3833766+03:30", "delete": false, "bookMark": false },
      { "messageID": '11', "messageTitle": "درخواست ثبت نظر", "jobTitle": "حسابدار ارشد", "messageCategoryID": '3', "sentTime": "2021-01-14T11:34:47.383253+03:30", "delete": false, "bookMark": false },
      { "messageID": '13', "messageTitle": "درخواست بررسی رزومه", "jobTitle": "کارشناس توسعه نرم افزار", "messageCategoryID": '3', "sentTime": "2021-01-13T15:54:39.3833416+03:30", "delete": false, "bookMark": false },
      { "messageID": '20', "messageTitle": "افزوده شدن رزومه جدید", "jobTitle": "کارشناس تحلیل و طراحی نرم افزار", "messageCategoryID": '2', "sentTime": "2021-01-12T20:57:52.3834014+03:30", "delete": false, "bookMark": false },
      { "messageID": '10', "messageTitle": "درخواست بررسی رزومه", "jobTitle": "کارشناس بازرگانی خارجی", "messageCategoryID": '3', "sentTime": "2021-01-12T20:36:39.3712778+03:30", "delete": false, "bookMark": false },
      { "messageID": '25', "messageTitle": "افزوده شدن رزومه جدید", "jobTitle": "کارشناس بازرگانی خارجی", "messageCategoryID": '2', "sentTime": "2021-01-09T14:57:29.383462+03:30", "delete": false, "bookMark": false },
      { "messageID": '22', "messageTitle": "رد شدن  کارجو", "jobTitle": "کارشناس دیجیتال مارکتینگ", "messageCategoryID": '2', "sentTime": "2021-01-03T20:00:50.3834179+03:30", "delete": false, "bookMark": false },
      { "messageID": '14', "messageTitle": "مصاحبه", "jobTitle": "کارشناس ارشد فروش", "messageCategoryID": '1', "sentTime": "2021-01-03T06:57:48.3833501+03:30", "delete": false, "bookMark": false }]

  constructor() { }
  getMessages() {
    return this.messages;
  }

  getMessageDetail(messageID: string) {
    return this.messagesDetail.find(x => x.messageID === messageID)
  }

  getMessageCategories() {
    return this.messageCategories;
  }

  removeMessage(id: string) {
    for (let i = 0; i < this.messages.length; i++) {
      if (this.messages[i].messageID === id) {
        this.messages[i].delete = true;
      }
    }
  }

  bookmarkMessage(id: string) {
    for (let i = 0; i < this.messages.length; i++) {
      if (this.messages[i].messageID === id) {
        if (this.messages[i].bookMark === false) {
          this.messages[i].bookMark = true;
        } else {
          this.messages[i].bookMark = false;
        }

      }
    }
  }
}