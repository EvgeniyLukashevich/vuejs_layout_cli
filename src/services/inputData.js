import blogImage1 from '@/assets/images/blog1.jpeg'
import blogImage2 from '@/assets/images/blog2.jpeg'
import blogImage3 from '@/assets/images/blog3.jpeg'
import blogImage4 from '@/assets/images/blog4.jpeg'
import blogImage5 from '@/assets/images/blog5.jpeg'
import blogImage6 from '@/assets/images/blog6.jpeg'
import blogImage7 from '@/assets/images/blog7.jpeg'
import projectImage1 from '@/assets/images/index-project1.jpeg'
import projectImage2 from '@/assets/images/index-project2.jpeg'
import projectImage3 from '@/assets/images/index-project3.jpeg'
import projectImage4 from '@/assets/images/index-project4.jpeg'

const blogItems = [
  {
    id: '1',
    href: 'blog_details.html',
    image: blogImage1,
    tags: ['Дизайн', 'Столовая', 'Интерьер'],
    title: 'Создадим лучший макет перепланировки',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, architecto aspernatur at aut ' +
      'exercitationem laudantium obcaecati odit repellat repudiandae sed similique sint tempora tempore, ' +
      'temporibus velit, veniam voluptatibus? Cum dolorem ea facere iste laudantium molestias mollitia nam, ' +
      'nihil obcaecati odio, quae quasi repellat soluta tenetur ullam vel velit veniam voluptate voluptatem ' +
      'voluptatibus! Assumenda delectus dolor doloribus earum esse, harum ipsa itaque neque, optio ratione ' +
      'recusandae soluta? Alias beatae cum distinctio et numquam, suscipit.',
    quote: 'Quae quasi repellat soluta',
    date: '19 декабря, 2022'
  },
  {
    id: '2',
    href: 'blog_details.html',
    image: blogImage2,
    tags: ['Дизайн', 'Планировка', 'Интерьер'],
    title: 'Лучшие интерьерные идеи по низкой цене',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto, at autem beatae ' +
      'esse eveniet exercitationem illo illum inventore ipsam maiores necessitatibus, odit, quas sit ' +
      'tempore temporibus unde? Accusamus architecto blanditiis dolorem doloribus illo iure ' +
      'natus necessitatibus.',
    quote: 'Architecto blanditiis dolorem doloribus',
    date: '22 декабря, 2022'
  },
  {
    id: '3',
    href: 'blog_details.html',
    image: blogImage3,
    tags: ['Планировка', 'Кухня', 'Интерьер'],
    title: 'Дизайнерские решения для офисов',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, deserunt eaque eius eveniet, ' +
      'exercitationem fuga illo illum iure laborum laudantium maxime nam nisi sapiente sit vel. Dignissimos ' +
      'fugit ipsam itaque maiores repellat saepe tempora! Cum ea explicabo, fugit magni non nostrum ' +
      'reprehenderit sit ut veritatis?',
    quote: 'Dignissimos fugit ipsam itaque maiores repellat saepe tempora!',
    date: '25 декабря, 2022'
  },
  {
    id: '4',
    href: 'blog_details.html',
    image: blogImage4,
    tags: ['Дизайн', 'Кухня', 'Столовая'],
    title: 'Создадим лучший интерьерный проект',
    text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur excepturi nobis qui sunt ' +
      'veritatis? Aperiam cupiditate laboriosam laudantium magnam, minima praesentium sint vel voluptatibus.',
    quote: 'Minima praesentium sint vel voluptatibus',
    date: '21 декабря, 2022'
  },
  {
    id: '5',
    href: 'blog_details.html',
    image: blogImage5,
    tags: ['Дизайн', 'Гостинная', 'Интерьер'],
    title: 'Лучшие макеты для гостинных',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim est et ex non porro ' +
      'praesentium vel! Accusamus accusantium, alias aliquid aperiam asperiores aut delectus dolores est ' +
      'eveniet expedita fuga illum inventore ipsum labore magnam modi molestiae, nam nemo neque non nulla ' +
      'odio optio pariatur placeat praesentium provident quaerat quibusdam quis quisquam ratione recusandae ' +
      'rem rerum sed sint sit soluta tempora. Dolores dolorum earum, fuga incidunt ipsam laboriosam, nam ' +
      'nihil numquam optio quasi quod rerum, sequi veniam! Adipisci alias animi asperiores at consequuntur ' +
      'dolorum facere fuga, illo ipsum laudantium magnam natus odit placeat quae quia quisquam quo recusandae,' +
      ' repellat suscipit veritatis. Alias exercitationem expedita facere quae rem repellat? Beatae eius ' +
      'eligendi ipsa ipsam laborum maiores natus, numquam officiis optio, quam reiciendis reprehenderit ' +
      'repudiandae sequi? Culpa dignissimos inventore perferendis quidem sunt.',
    quote: 'Adipisci alias animi asperiores',
    date: '22 декабря, 2022'
  },
  {
    id: '6',
    href: 'blog_details.html',
    image: blogImage6,
    tags: ['Интерьер', 'Кухня', 'Столовая'],
    title: 'Готовые решения для столовых',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad alias assumenda beatae, commodi ' +
      'consectetur consequatur enim eveniet ex excepturi hic incidunt itaque libero minima modi nihil ' +
      'obcaecati optio provident quibusdam recusandae similique tempora velit voluptatibus! Aspernatur ' +
      'deserunt eligendi facilis fuga, in inventore iusto laudantium minima, necessitatibus ' +
      'omnis ratione saepe.',
    quote: 'enim eveniet ex excepturi hic incidunt itaque libero',
    date: '23 декабря, 2022'
  },
  {
    id: '7',
    href: 'blog_details.html',
    image: blogImage7,
    tags: ['Дизайн', 'Столовая', 'Планировка'],
    title: 'Low Cost Latest Invented Interior Designing Ideas',
    text: 'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для ' +
      'примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в ' +
      'работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек ' +
      'с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения ' +
      'текста на странице.',
    quote: 'Дизайнеры импровизировали в работе над макетами',
    date: '30 декабря, 2022'
  }
]

const projectItems = [
  {
    id: '1',
    href: 'project_details.html',
    image: projectImage1,
    tags: ['Декор', 'Кухня'],
    title: 'Современная кухня',
    date: '15 ноября, 2022'
  },
  {
    id: '2',
    href: 'project_details.html',
    image: projectImage2,
    tags: ['Планировка', 'Прихожая'],
    title: 'Современная кухня',
    date: '29 октября, 2022'
  },
  {
    id: '3',
    href: 'project_details.html',
    image: projectImage3,
    tags: ['Декор', 'Столовая'],
    title: 'Современная кухня',
    date: '3 декабря, 2022'
  },
  {
    id: '4',
    href: 'project_details.html',
    image: projectImage4,
    tags: ['Декор', 'Гостинная'],
    title: 'Современная кухня',
    date: '17 октября, 2022'
  }
]

const metricsData = {
  experience: {
    value: '12',
    caption: 'Лет опыта'
  },
  successfulProjects: {
    value: '85',
    caption: 'Успешных проектов'
  },
  projectsInProgress: {
    value: '15',
    caption: 'Проектов в работе'
  },
  clients: {
    value: '94',
    caption: 'Счастливых клиентов'
  }
}

const socialItems = [
  {
    id: '1',
    name: 'Twitter',
    href: 'twitter.com',
    iconClass: 'fab fa-twitter'
  },
  {
    id: '2',
    name: 'LinkedIn',
    href: 'linkedin.com',
    iconClass: 'fab fa-linkedin-in'
  }
]

export { blogItems, projectItems, metricsData, socialItems }
