export const optionsProducts = {
    colors: [
        {class: 'bg-white', selectedClass: 'ring-gray-400', content: 'White'},
        {class: 'bg-blue-500', selectedClass: 'ring-gray-400', content: 'Blue'},
        {class: 'bg-black', selectedClass: 'ring-gray-400', content: 'Black'},
        {class: 'bg-yellow-500', selectedClass: 'ring-gray-400', content: 'Yellow'}
    ],
    sizes: [
        {content: 'XS', selectedClass: 'ring-indigo-600'},
        {content: 'S', selectedClass: 'ring-indigo-600'},
        {content: 'M', selectedClass: 'ring-indigo-600'},
        {content: 'L', selectedClass: 'ring-indigo-600'},
        {content: 'XL', selectedClass: 'ring-indigo-600'},
        {content: 'XXL', selectedClass: 'ring-indigo-600'}
    ],
    brands: [
        {content: 'Samsung', selectedClass: 'ring-indigo-600'},
        {content: 'Asus', selectedClass: 'ring-indigo-600'},
        {content: 'LG', selectedClass: 'ring-indigo-600'},
        {content: 'Apple', selectedClass: 'ring-indigo-600'},
        {content: 'Xiaomi', selectedClass: 'ring-indigo-600'},
        {content: 'Lenovo', selectedClass: 'ring-indigo-600'}
    ]
}

export const inputsCategory = [
    {id: "men's clothing", textContext: "Men's clothing"},
    {id: "women's clothing", textContext: "Women's clothing"},
    {id: "jewelery", textContext: "Jewelery"},
    {id: "electronics", textContext: "Electronics"}
]

export const inputsRating = [
    {
        type: 'checkbox',
        id: 'above',
        classInput: 'w-[15px]',
        classDiv: 'flex',
        classLabel: 'pl-1 cursor-pointer',
        textContent: 'Above average'
    },
    {
        type: 'checkbox',
        id: 'below',
        classInput: 'w-[15px]',
        classDiv: 'flex mt-2',
        classLabel: 'pl-1 cursor-pointer',
        textContent: 'Below average'
    }
]
