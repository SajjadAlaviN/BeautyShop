function Footer() {
  return (
    <div className="container rounded-2xl mx-auto mt-5 bg-background p-10 grid md:grid-cols-2 sm:grid-cols-2 justify-between items-center gap-2 text-text">
      <div className="justify-self-center">
        <h2 className="text-text">درباره ما</h2>
        <p className="text-text">
          **Beauty Shop** یک فروشگاه اینترنتی کوچک در زمینه محصولات مراقبت از
          پوست و مو است که با هدف ارائه یک تجربه ساده، مدرن و کاربرپسند برای
          مشاهده و انتخاب محصولات طراحی و پیاده‌سازی شده است. این پروژه با تمرکز
          بر طراحی رابط کاربری، دسته‌بندی محصولات و تجربه خرید ساده و روان توسعه
          داده شده است.
        </p>
      </div>

      <div className="flex flex-col gap-10 justify-self-center">
        <p className="border-b-border">ارتباط با ما</p>
        <div>
          <span>شماره تلفن:</span>
          <span>09335290978</span>
        </div>
        <div>
          <span>آدرس: </span>
          <span>باجک / فرهنگیان / بنفشه 4 / پلاک 20</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
