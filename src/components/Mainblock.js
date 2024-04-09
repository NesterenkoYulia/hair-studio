import styles from "./Mainblock.module.css";
import ImageSlider from "./ImageSlider";
import ImageAndTextSlider from "./ImageAndTextSlider";
import firstImg from "./../img/lesson_one/1.png";
import secondImg from "./../img/lesson_one/2.png";
import threetImg from "./../img/lesson_one/3.png";
import imgLessonTwo1 from "./../img/lesson_two/1.png";
import imgLessonTwo2 from "./../img/lesson_two/2.png";
import imgLessonTwo3 from "./../img/lesson_two/3.png";
import imgLessonThree1 from "./../img/losseon_three/1.png";
import imgLessonThree2 from "./../img/losseon_three/2.png";
import imgLessonThree3 from "./../img/losseon_three/3.png";

import feedImg1 from "./../img/img_feedback/1.png";
import feedImg2 from "./../img/img_feedback/2.png";
import feedImg3 from "./../img/img_feedback/3.png";
import feedImg4 from "./../img/img_feedback/4.png";
import feedImg5 from "./../img/img_feedback/5.png";
const Mainblock = () => {
  const images1 = [firstImg, secondImg, threetImg];
  const images2 = [imgLessonTwo1, imgLessonTwo2, imgLessonTwo3];
  const images3 = [imgLessonThree1, imgLessonThree2, imgLessonThree3];

  const slides = [
    {
      image: feedImg1,
      title: "АЛІНА",
      description:
        "Юлічка привітик, хотіла сказати велике дякую за нові знання, все було чітко, по суті, теорія дуже детально розписана Коли починали переходити до практичних уроків дуже боялась якось потягнути за волосся і це буде боляче, але ти навчила як правильно робити Переживала що не буде виходити вже самостійно, але все виходить і стараюсь розвиватись далі пробувати щось нове, тепер можу створювати повні образи і дуже цьому щаслива дякую",
    },
    {
      image: feedImg2,
      title: "ЯНА",
      description:
        "Хочу подякувати за такий інформаційний та насичений курс Я дуже задоволена всім, подачою інформації, ставленням і взагалі атмсоферою в студії Я отримала всі знання за якими шла Дуже рада, що обрала саме вас Дякую за таку цінну інформацію і круті знання",
    },
    {
      image: feedImg3,
      title: "МАРІЯ",
      description:
        "Я дуууже задоволена що обрала саме тебе всіма твоїми поради я користуюсь і надалі, ти завжди на звʼязку, і допоможеш виправити помилки якщо щось не виходить!) я надалі буду звертатися тільки до тебе, та рекомендувати тебе як професійного стиліста!",
    },
    {
      image: feedImg4,
      title: "Наташа",
      description:
        "Хочу подякувати за твої курси Особливо за останній, в якому ми детально розібрали засоби і структуру волосся. Ті знання, які я отримала на перших курсах допомогли мені створювати класні образи. Але на останньому мої знання вдосконалилась і зараз я вже більше стала розуміти з чим я працюю і зрозуміла свої помилки. Дякую тобі, думаю в нас ще будуть зустрічі на нових курсах",
    },
    {
      image: feedImg5,
      title: "Ання",
      description:
        "Юлічка, хочу залишити слова подяки для тебе За те, що поділилася своїми знаннями та досвідом Людина я дуже прискіплива, але в виборі наставника не сумнівалася ні секунди Це саме той випадок, коли навчальний процес проходить на одному диханні Пам'ятаю, що одного разу я розхвилювалася і почали труситися руки, але ти вміло знайшла потрібні слова і все далі пішло як по маслуЗнаю на 200% до кого прийду на підвищення Бо крім отриманих цінних знань, це ще й атмосфера, стиль та психологія Дякую безмежно Бажаю океан роботи, яка приносить задоволення, безліч вдячних клієнтів та учнів",
    },
  ];

  return (
    <div className={[styles.main_block]}>
      <div className={[styles.container_mainblock]}>
        <h2 id="programm" className={[styles.main_block_title]}>
          програма курсу
        </h2>
        <div className={styles.lesson}>
          <h3 className={[styles.lesson_title_one]}>Урок 1</h3>
          <h3 className={[styles.lesson_name]}>Теорія</h3>
          <p className={[styles.about_lesson]}>Ви навчитеся:</p>
          <div className={styles.block_text}>
            <p className={[styles.lesson_text]}>
              Створювати стійкі комерційні укладки на тяжкому пористому та
              стекловидному волоссі
            </p>
            <p className={[styles.lesson_text]}>Визначення структури волосся</p>
            <p className={[styles.lesson_text]}>
              Підбір вірних стайлінгових засобів відповідно до типу волосся
            </p>
            <p className={[styles.lesson_text]}>
              Обʼєми та форми відповідно до анатомічної особливості форми голови
              та обличчя
            </p>
            <p className={[styles.lesson_text]}>
              Вибір інструментів та температури спираючись на структуру волосся
            </p>
            <p className={[styles.lesson_text]}>
              Вірне стилізування та оформлення укладки
            </p>
          </div>
        </div>
        <div className={[styles.lesson_all]}>
          <h3 className={[styles.lesson_number]}>Урок 2</h3>
          <h3 className={[styles.lesson_title]}>Голівудська хвиля</h3>
          <p className={[styles.lesson_subtitle]}>(Легкі та м’які хвилі)</p>
          <div className={[styles.lesson_video]}>
            <iframe
              width="1170"
              height="650"
              src="https://www.youtube.com/embed/tx68oyg6cqg?si=PN6JUXew6P15mQwP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={[styles.lesson_video_mobile]}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/tx68oyg6cqg?si=PN6JUXew6P15mQwP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={[styles.slayder]}>
            <ImageSlider images={images1} />
          </div>

          <div className={[styles.lesson_img]}>
            <img src={firstImg} />
            <img src={secondImg} />
            <img src={threetImg} />
          </div>

          {/* text */}
          <p className={[styles.about_lesson_slayder]}>
            На цьому уроці Ви навчитеся:
          </p>
          <div className={[styles.slayder_block_text]}>
            <div>
              <p className={[styles.lesson_text_slayder]}>
                Створювати класичні голівудські форми
              </p>
              <p className={[styles.lesson_text_slayder]}>
                Розбиратися в стайлінгових засобах і вибирати їх залежно від
                типів волосся
              </p>
              <p className={[styles.lesson_text_slayder]}>
                Схема та техніка завивки
              </p>
            </div>
            <div>
              <p className={[styles.lesson_text_slayder]}>
                Оформлення волосся у лиця при наявності чубчика
              </p>
              <p className={[styles.lesson_text_slayder]}>
                Секрет створення прикореневого об’єму на фен
              </p>
              <p className={[styles.lesson_text_slayder]}>
                Правильно працювати плойкою з зажимом
              </p>
            </div>
          </div>
          <div className={[styles.strelka_parant]}>
            <div className={styles.strelka}>
              <a href="https://secure.wayforpay.com/button/bb16f150bc075">Перейти до придбання курсу</a>
              <div className={[styles.strelka_svg]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="274"
                  height="8"
                  viewBox="0 0 274 8"
                  fill="none"
                >
                  <path
                    d="M274.355 4.35226C274.549 4.15629 274.548 3.83971 274.352 3.64516L271.159 0.474812C270.963 0.280264 270.646 0.281419 270.452 0.477393C270.257 0.673367 270.258 0.989947 270.454 1.1845L273.293 4.00258L270.475 6.84131C270.28 7.03729 270.281 7.35387 270.477 7.54841C270.673 7.74296 270.99 7.74181 271.184 7.54583L274.355 4.35226ZM0.00182481 5.5L274.002 4.5L273.998 3.5L-0.00182481 4.5L0.00182481 5.5Z"
                    fill="#1B1818"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* 3 */}
          <h3 className={[styles.lesson_number]}>Урок 3</h3>
          <h3 className={[styles.lesson_title]}>Текстурний низький пучок</h3>
          <p className={[styles.lesson_subtitle]}>
            (На основі ломаної текстури)
          </p>
          <div className={[styles.lesson_video]}>
            <iframe
              width="1170"
              height="650"
              src="https://www.youtube.com/embed/_UQSoAdunIE?si=uK3bGUhcPWmE_H6_"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={[styles.lesson_video_mobile]}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/_UQSoAdunIE?si=uK3bGUhcPWmE_H6_"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={[styles.slayder]}>
            <ImageSlider images={images2} />
          </div>
          <div className={[styles.lesson_img]}>
            <img src={imgLessonTwo1} />
            <img src={imgLessonTwo2} />
            <img src={imgLessonTwo3} />
          </div>
          <div className={[styles.lesson_slayder]}>{/* slayder */}</div>
          {/* text */}
          <p className={[styles.about_lesson_slayder]}>
            На цьому уроці Ви навчитеся:
          </p>
          <div className={[styles.slayder_block_text]}>
            <div>
              <p className={[styles.lesson_text_slayder_mod]}>
                Унікальної техніки накрутки на утюжок
              </p>
            </div>
            <div>
              <p className={[styles.lesson_text_slayder_mod2]}>
                Ломаної текстури яка створює прикореневий об’єм від кореня і вам
                не доведеться працювати з прикореневою зоною окремо
              </p>
            </div>
            <div>
              <p className={[styles.lesson_text_slayder_mod]}>
                Швидкої техніка збору зачіски
              </p>
            </div>
          </div>
          <div className={[styles.strelka_parant]}>
            <div className={styles.strelka}>
              <a href="https://secure.wayforpay.com/button/bb16f150bc075">Перейти до придбання курсу</a>
              <div className={[styles.strelka_svg]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="274"
                  height="8"
                  viewBox="0 0 274 8"
                  fill="none"
                >
                  <path
                    d="M274.355 4.35226C274.549 4.15629 274.548 3.83971 274.352 3.64516L271.159 0.474812C270.963 0.280264 270.646 0.281419 270.452 0.477393C270.257 0.673367 270.258 0.989947 270.454 1.1845L273.293 4.00258L270.475 6.84131C270.28 7.03729 270.281 7.35387 270.477 7.54841C270.673 7.74296 270.99 7.74181 271.184 7.54583L274.355 4.35226ZM0.00182481 5.5L274.002 4.5L273.998 3.5L-0.00182481 4.5L0.00182481 5.5Z"
                    fill="#1B1818"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* 4 */}
          <h3 className={[styles.lesson_number]}>Урок 4</h3>
          <h3 className={[styles.lesson_title]}>
            Правила роботи з вирівнювачем
          </h3>
          <p className={[styles.lesson_subtitle]}>
            (Об’ємні хвилі від обличчя)
          </p>
          <div className={[styles.lesson_video]}>
            <iframe
              width="1170"
              height="650"
              src="https://www.youtube.com/embed/ACUlQ6CdFpk?si=8-k1veltObVqcyRy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={[styles.lesson_video_mobile]}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/ACUlQ6CdFpk?si=8-k1veltObVqcyRy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={[styles.slayder]}>
            <ImageSlider images={images3} />
          </div>
          <div className={[styles.lesson_img]}>
            <img src={imgLessonThree1} />
            <img src={imgLessonThree2} />
            <img src={imgLessonThree3} />
          </div>

          {/* text */}
          <p className={[styles.about_lesson_slayder]}>
            На цьому уроці Ви навчитеся:
          </p>
          <div className={[styles.slayder_block_text]}>
            <div>
              <p className={[styles.lesson_text_slayder]}>
                Як робити швидкі укладання волосся за допомогою вирівнювача
              </p>
              <p className={[styles.lesson_text_slayder]}>
                Особливостям роботи на важкому волоссі
              </p>
              <p className={[styles.lesson_text_slayder_mod3]}>
                Навчитеся робити максимально комерційні укладання, які підійдуть
                у будь-якій ситуації в салонах та на зйомках
              </p>
            </div>
            <div>
              <p className={[styles.lesson_text_slayder]}>
                Об’єм від кореня до кінчиків
              </p>
              <p className={[styles.lesson_text_slayder]}>
                Схема та техніка завивки, фінішна фіксація
              </p>
              <p className={[styles.lesson_text_slayder]}>
                Трансформація оформлення у лиця
              </p>
            </div>
          </div>
          <div className={[styles.strelka_parant]}>
            <div className={styles.strelka}>
              <a href="https://secure.wayforpay.com/button/bb16f150bc075">Перейти до придбання курсу</a>
              <div className={[styles.strelka_svg]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="274"
                  height="8"
                  viewBox="0 0 274 8"
                  fill="none"
                >
                  <path
                    d="M274.355 4.35226C274.549 4.15629 274.548 3.83971 274.352 3.64516L271.159 0.474812C270.963 0.280264 270.646 0.281419 270.452 0.477393C270.257 0.673367 270.258 0.989947 270.454 1.1845L273.293 4.00258L270.475 6.84131C270.28 7.03729 270.281 7.35387 270.477 7.54841C270.673 7.74296 270.99 7.74181 271.184 7.54583L274.355 4.35226ZM0.00182481 5.5L274.002 4.5L273.998 3.5L-0.00182481 4.5L0.00182481 5.5Z"
                    fill="#1B1818"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* 4 */}
        </div>
        {/* <div className={[styles.tarifs]}>
          <h2 className={[styles.tariftitle]}>Тарифні плани</h2>
          <div className={[styles.tarifblock]}>
            <div className={[styles.tarifleft]}>
              <h3 className={[styles.tariftitleprice]}>Premium</h3>
              <h4 className={[styles.tariftitlepricecena]}>3000 UAH</h4>
              <p className={[styles.tariftext]}>
                Теорія З Практичних занять Зворотній звʼязок Доступ - 6 місяців
              </p>
              <button className={styles.tarifbtn}>Придбати курс</button>
            </div>
            <div className={[styles.tarifright]}>
              <h3 className={[styles.tariftitleprice]}>Premium</h3>
              <h4 className={[styles.tariftitlepricecena]}>3000 UAH</h4>
              <p className={[styles.tariftext]}>
                Теорія З Практичних занять Зворотній звʼязок Доступ - 6 місяців
              </p>
              <button className={[styles.tarifbtn]}>Придбати курс</button>
            </div>
          </div>
        </div>
        <h2 className={[styles.main_block_title]}>
          відгуки від учасниць офлайн курсу
        </h2>

        <ImageAndTextSlider slides={slides} /> */}
      </div>
      <div className={[styles.tarifblockandfeedback]}>
        <div className={[styles.tarifs]}>
          <h2 className={[styles.tariftitle]}>Тарифні плани</h2>
          <div className={[styles.tarifblock]}>
            <div className={[styles.tarifleft]}>
              <h3 className={[styles.tariftitleprice]}>Premium</h3>
              <h4 className={[styles.tariftitlepricecena]}>3000 UAH</h4>
              <p className={[styles.tariftext]}>
                Теорія <br /> З Практичних занять <br /> Зворотній звʼязок{" "}
                <br />
                Доступ - 6 місяців
              </p>
              <a href="https://t.me/yuliianes" className={styles.tarifbtn}>
                Придбати курс
              </a>
            </div>
            <div className={[styles.tarifright]}>
              <h3 className={[styles.tariftitleprice]}>Standart</h3>
              <h5
                style={{
                  textDecoration: "line-through",
                  fontSize: "24px",
                  color: "#e25f5b",
                }}
                className={[styles.tariftitlepricecena]}
              >
                2500 UAH
              </h5>
              <h4 className={[styles.tariftitlepricecena]}>499 UAH</h4>
              <p className={[styles.tariftext]}>
                Теорія <br /> З Практичних занять <br />
                Доступ - 3 місяців
              </p>
              <a
                href="https://secure.wayforpay.com/button/bb16f150bc075"
                className={[styles.tarifbtn]}
              >
                Придбати курс
              </a>
            </div>
          </div>
        </div>
        <h2 className={[styles.main_block_title]}>
          відгуки від учасниць офлайн курсу
        </h2>
        <div className={[styles.allsliders]}>
          <ImageAndTextSlider slides={slides} />
        </div>
      </div>
      <div className={[styles.container_mainblock]}>
        <p style={{ textAlign: "left"}}>
          <h2>Правила та Умови (Terms and conditions):</h2>
          <br/>
          Ці умови визначають порядок надання послуги та умови придбання курсу на сайті. Користуючись даним сайтом і здійснюючи покупку, ви погоджуєтеся з цими умовами:
          <br/>
          Послуги/Товари: Наш інтернет-магазин пропонує курси для перукарів, стилістів та візажистів. Курси надсилаються на вашу електронну пошту після успішної оплати.
          <br/>
          Оплата: Ми приймаємо оплату за допомогою таких платіжних методів як Visa/MasterCard, Google Pay, та Apple Pay.
          <br/>
          Доставка: Оскільки наші товари є електронними, доставка не потрібна, і курси надсилаються автоматично на вашу електронну пошту.
          <br/><br/>
          <h2>Правила повернення грошових коштів (Refund Policy):</h2>
          <br/>
          Сайт пропонує курси, які надсилаються на електронну пошту. Оскільки курси надсилаються миттєво після оплати, процедура повернення грошей не передбачена.
          <br/>
          Скасування транзакції: Оскільки курси надсилаються негайно після оплати, скасування транзакції не можливе.
          <br/>
          Відшкодування: У зв'язку з характером надання послуги, відшкодування грошових коштів не проводиться.
          <br/><br/>
          <h2>За додатковою інформацією звертайтесь до нас за контактами нижче (Контактна інформація):</h2><br/>
          ФОП Нестеренко Юлія Василівна<br/>
          ІПН: 26246347234743734<br/>
          Адреса: 347574528245854<br/>
          тел: +38 093 813 36 29<br/>
          Email: korol.Julia1996@gmail.com<br/><br/>
          </p>
        </div>
    </div>
  );
};
export default Mainblock;
