const shortString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum non orci ut dignissim. Fusce fermentum felis aliquam, mattis nibh ut, faucibus leo. Sed lectus libero, volutpat at eros quis, venenatis tempus neque. Nulla vel faucibus orci, nec convallis ligula. Quisque maximus gravida orci, in lacinia mauris pretium nec. Sed et enim bibendum, fermentum tellus eu, eleifend ex. Aliquam lectus magna, sollicitudin vitae placerat ac, semper ut risus. Nunc vestibulum lacus et nulla volutpat auctor.';
const mediumString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis fringilla laoreet. Mauris mattis enim ut felis consectetur, vitae lacinia enim auctor. Aenean vitae fermentum odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum non orci ut dignissim. Fusce fermentum felis aliquam, mattis nibh ut, faucibus leo. Sed lectus libero, volutpat at eros quis, venenatis tempus neque. Nulla vel faucibus orci, nec convallis ligula. Quisque maximus gravida orci, in lacinia mauris pretium nec. Sed et enim bibendum, fermentum tellus eu, eleifend ex. Aliquam lectus magna, sollicitudin vitae placerat ac, semper ut risus. Nunc vestibulum lacus et nulla volutpat auctor.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
export const items = Array.from({ length: 100 }, (v, i) => i % 2 ? shortString : mediumString);

export const autoCompleteOptions = [
    {
        id: 1,
        value: 'Papaya'
         
    },
    {
        id: 2,
        value: 'Persimmon',
    },
    {
        id: 3,
        value: 'Pineapple'
       
    },
    {
        id: 4,
        value: 'Paw Paw'
       
    },
    {
        id: 5,
        value: 'Pomegranate'
       
    },
    {
        id: 6,
        value: 'Persimmon'
       
    },
    {
        id: 7,
        value: 'Prickly Pear'
       
    },
    {
        id: 8,
        value: 'Peach'
    }
]