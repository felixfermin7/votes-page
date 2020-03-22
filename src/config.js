import moment from 'moment'

const aMonthAgo = moment().subtract(2, 'month').format('YYYY-MM-DD HH:mm:ss')
const closingIn = moment().add(22, 'days').format('YYYY-MM-DD HH:mm:ss')

const categories = [
  {
    id: 'RELIGION',
    name: 'Religion',
  },
  {
    id: 'ENTERTAINMENT',
    name: 'Entertainment',
  },
  {
    id: 'POLITICS',
    name: 'Politics',
  },
  {
    id: 'BUSINESS',
    name: 'Business',
  },
]

const people = [
  {
    id: 1,
    name: 'Pope Francis',
    category: 'RELIGION',
    thumbs_up: 64,
    thumbs_down: 36,
    is_banner: true,
    description: `He's talking tough on clergy sexual abuse,
    but is he just another papal pervert
    protector? (thumbs down) or a true
    pedophile punishing pontiff (thumbs up)`,
    date_added: aMonthAgo,
    closinng_in: closingIn,
    image_url:
      'https://cruxnow.com/wp-content/uploads/2016/12/20160914T0844-5137-CNS-POPE-AUDIENCE-PRINCES-1024x675.jpg',
  },
  {
    id: 2,
    name: 'Kanye West',
    category: 'ENTERTAINMENT',
    thumbs_up: 64,
    thumbs_down: 36,
    is_banner: false,
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
    date_added: aMonthAgo,
    closinng_in: closingIn,
    image_url:
      'https://www.biography.com/.image/t_share/MTU0OTkwNDUxOTQ5MDUzNDQ3/kanye-west-attends-the-christian-dior-show-as-part-of-the-paris-fashion-week-womenswear-fall-winter-2015-2016-on-march-6-2015-in-paris-france-photo-by-dominique-charriau-wireimage-square.jpg',
  },
  {
    id: 3,
    name: 'Mark Zuckerberg',
    category: 'BUSINESS',
    thumbs_up: 36,
    thumbs_down: 64,
    is_banner: false,
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
    date_added: aMonthAgo,
    closinng_in: closingIn,
    image_url:
      'https://img.apmcdn.org/a5b9bbe5e8d81812af1829ff2e39460aa05e134f/uncropped/8824e7-20180411-mark-zuckerberg.jpg',
  },
  {
    id: 4,
    name: `Cristina Fernández de Kirchner`,
    category: 'POLITICS',
    thumbs_up: 36,
    thumbs_down: 64,
    is_banner: false,
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
    date_added: aMonthAgo,
    closinng_in: closingIn,
    image_url: 'https://cdni.rt.com/actualidad/public_images/2020.02/article/5e45e13859bf5b21ac3665fc.JPG',
  },
  {
    name: 'Malala Yousafzai',
    category: 'ENTERTAINMENT',
    thumbs_up: 64,
    thumbs_down: 36,
    is_banner: false,
    description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
    date_added: aMonthAgo,
    closinng_in: closingIn,
    image_url:
      'https://thewestnews.com/wp-content/uploads/2020/02/Taliban-leader-who-orchestrated-Malala-Yousafzai-shooting-escaped-military-prison-in-Pakistan.jpg',
  },
]

export { people, categories }
