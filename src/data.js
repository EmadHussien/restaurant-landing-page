
const superToBegin = 
[
       {
        dishName : 'Pickle Plate' , 
        dishPrice:'$11' , 
        dishIngredients: 'a rotating selection of pickled vegetables'
       }
       ,
       
       {
        dishName : 'Fried Stuffed Olives' ,
        dishPrice:'$9' , 
        dishIngredients: 'yuzu and smoked chili sausage'
       
       }
       ,
       
       {
        dishName : 'Tonno Mantecato',
        dishPrice:'$24',
        dishIngredients: 'confit Albacore tuna, smoked potato, furikake, bruschetta w/ tobiko' 
       }
       ,
       
       {
        dishName : 'Carne Cruda' , 
        dishPrice:'$25',
        dishIngredients: 'Snake River Farms wagyu, nashi pear, charred scallion soy, parmesan, arima sansho, gnocco fritto' 
       }
       ,
       
       {
        dishName : 'Octopus Salad' , 
        dishPrice:'$24' ,
        dishIngredients: 'crispy smoked octopus, fresh and pickled radishes, parsley and chili purée'
       
       }
       ,
       
       {
        dishName : 'Autumn Salad' ,  
        dishPrice: '$24',
        dishIngredients: 'various textures of beets, turnip, radish, coriander, organic rose honey vinaigrette, mascarpone umeboshi and yuzu crema'
       }
       ,
       
       {
        dishName : 'Fish Crudo' , 
        dishPrice: '$24' ,
        dishIngredients: 'shiso vinaigrette, radishes, Tokyo leek, capers, pickled almonds, Castelvetrano olives'
       }
       ,
       
       {
        dishName : 'Half-Dozen Oysters' ,
        dishPrice: '- market price',
        dishIngredients: 'daikon chili, tomato wakame granita'
       }
        
]


const TenderToTooth = 
[

    
    {
    
        dishName : 'Charcoal Udon' ,
        dishPrice: '$49' , 
        dishIngredients: 'Dungeness crab, prawns, squid, marinated gem tomatoes, Calabrian chili butter'
    }
    ,

    

{
    dishName: 'Tajarin', 
    dishPrice: '$33' ,
    dishIngredients: 'butter, roasted mushrooms, miso cured yolk'
} 
,

{
   dishName: 'Mezzi Rigatoni', 
   dishPrice: '$33', 
   dishIngredients: 'nut fed pork ragu, tomato xo butter, sesame crumb'
}

        
]


const TheMainEvent = 
[
    {
        dishName:'Organic Half Chicken',
        dishPrice:'$36',
        dishIngredients: 'shio koji dipping sauce, herbed oil'
    }
    ,   

    {
        dishName:'Whole Fried Fish' ,
        dishPrice:'- market price',
        dishIngredients:'daikon soy dipping sauce'
    } 
    ,

    {
        dishName: 'Sablefish' ,
        dishPrice: '$47',
        dishIngredients: 'nanban oyster mushrooms, chili salmoriglio, marinated currants, pine nuts, sunchoke purée '
    }
    ,
    {
        dishName: 'Lamb' ,
        dishPrice: '$48',
        dishIngredients: 'fennel and chili rubbed Te Mana lamb sirloin, hijiki tsukudani, brassicas, miso bagna cauda'
    }
        
]


const ByTheSide = 
[
    {
        dishName: 'Mascarpone Polenta' ,
        dishPrice: '$15',
        dishIngredients: 'crispy guanciale, yuzu lemon balm & shiso salsa verde, rice crisps'
    }
    ,   

    {
        dishName: 'Yaki Onigiri' ,
        dishPrice: '$16',
        dishIngredients: 'grilled pressed rice stuffed with himematsu mushrooms, Parmesan, roasted chicken consommé, pickled shiso, Piave vecchio'
        
    } 
    ,

    {
        dishName: 'Braised Greens',
        dishPrice: '$15',
        dishIngredients: 'swiss chard, grilled kale, citrus brown butter, toasted walnuts'
    }

]



module.exports = {superToBegin , TenderToTooth, TheMainEvent,ByTheSide};