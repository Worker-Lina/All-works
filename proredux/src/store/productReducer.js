const defaultState = {
  products: [
    { id: 1, name: "product", brand: "apple", type: "компьютер", price: 134, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    { id: 2, name: "abokys", brand: "lenovo", type: "ноутбук", price: 1, img: "https://cdn.alza.sk/ImgW.ashx?fd=FotoAddOrig&cd=NC051d4x0-03&i=1.jpg" },
    { id: 3, name: "abokys", brand: "apple", type: "ноутбук", price: 143, img: "https://cdn.alza.sk/ImgW.ashx?fd=FotoAddOrig&cd=NC051d4x0-03&i=1.jpg" },
    { id: 4, name: "ced", brand: "samsung", type: "монитор", price: 900, img: "https://forcecom.kz/upload/iblock/04f/04f9b15983aa808b4b38d95bb76b05c5.jpg" },
    { id: 5, name: "bokys", brand: "apple", type: "холодильник", price: 50, img: "https://images.satu.kz/21176319_w640_h640_holodilnik-mir-rk.jpg" },
    { id: 6, name: "ced", brand: "samsung", type: "компьютер", price: 34, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    { id: 7, name: "ced", brand: "samsung", type: "компьютер", price: 34, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    { id: 8, name: "ced", brand: "lenovo", type: "компьютер", price: 34, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    { id: 9, name: "ced", brand: "lenovo", type: "компьютер", price: 34, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    { id: 10, name: "ced", brand: "lenovo", type: "компьютер", price: 34, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    { id: 11, name: "ced", brand: "lenovo", type: "компьютер", price: 34, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    { id: 12, name: "ced", brand: "lenovo", type: "компьютер", price: 34, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    { id: 13, name: "ced", brand: "lenovo", type: "компьютер", price: 34, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    { id: 14, name: "ced", brand: "lenovo", type: "компьютер", price: 34, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    { id: 15, name: "ced", brand: "lenovo", type: "компьютер", price: 34, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
  ],
  filter: {
    type: "property",
    criteria: {
    }
  },
  cart: [
    {product:{ id: 1, name: "product", brand: "apple", type: "компьютер", price: 100, img: "https://images.by.prom.st/173019328_w640_h640_kompyutery-proizvodstva-rb.jpg" },
    amount:2},
    {product: { id: 2, name: "abokys", brand: "lenovo", type: "ноутбук", price: 1, img: "https://cdn.alza.sk/ImgW.ashx?fd=FotoAddOrig&cd=NC051d4x0-03&i=1.jpg" },
    amount:3}
  ]
}

const SORT_BY_TYPE = "SORT_BY_TYPE";
const SORT_BY_PRICE = "SORT_BY_PRICE";
const SORT_BY_NAME = "SORT_BY_NAME";
const CHANGE_PRODUCT_AMOUNT = "CHANGE_PRODUCT_AMOUNT"


export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SORT_BY_TYPE:
      if (state.filter.type === "function") {
        state.filter = [state.filter, {
          type: "property",
          criteria: {
            prop: "brand",
            value: action.payload
          }
        }]
      }



      else {
        
        if (state.filter instanceof Array) {
          let index = 0;
          state.filter.map(fil => {
            if (fil.type === "property") {
              index = state.filter.indexOf(fil)
            }
          })
          if (state.filter[index].criteria.value === action.payload) { state.filter[index].criteria = {} }
          else if (state.filter[index].criteria.value instanceof Array) { // проверка яв-ся ли массивом
            if (state.filter[index].criteria.value.includes(action.payload)) { // содержит ли нажатый элемент
              state.filter[index].criteria.value.splice(state.filter[index].criteria.value.indexOf(action.payload), 1) // удаляем элемент
              if (state.filter[index].criteria.value.length === 0) { // если пустой массив делаем его пустым объектом
                state.filter[index].criteria = {}
              }
            }
            else { state.filter[index].criteria.value.push(action.payload) } 
          } 
          else {
            state.filter[index].criteria.value = [
              state.filter[index].criteria.value, action.payload
            ]
          }
          console.log(state.filter)
        }


        else {
          if (Object.keys(state.filter.criteria).length !== 0) {
            if (state.filter.criteria.value === action.payload) { state.filter.criteria = {} } // если нажата два раза фильтры снимаются
            else if (state.filter.criteria.value instanceof Array) { // проверка яв-ся ли массивом
              if (state.filter.criteria.value.includes(action.payload)) { // содержит ли нажатый элемент
                state.filter.criteria.value.splice(state.filter.criteria.value.indexOf(action.payload), 1) // удаляем элемент
                if (state.filter.criteria.value.length === 0) { // елси пустой массив делаем его пустым объектом
                  state.filter.criteria = {}
                }
              }
              else { state.filter.criteria.value.push(action.payload) } // добавляем фильтр
            }
            else {
              state.filter.criteria.value = [
                state.filter.criteria.value, action.payload
              ]
            }
          } 
          else {
            state.filter = {
              type: "property",
              criteria: {
                prop: "brand",
                value: action.payload
              }
            }
          }
        }
      }


      return { ...state, filter: state.filter }
    case SORT_BY_PRICE:
      if(state.filter instanceof Array){
        state.filter.map(fil => {
          if (fil.type === "function" && action.payload === fil.criteria.property) {
            state.filter.splice(state.filter.indexOf(fil), 1)
            if(state.filter.length === 1){
              state.filter = state.filter[0]
            }
          }
        })
      }else{
        if (Object.keys(state.filter.criteria).length !== 0) {
          if(action.payload === state.filter.criteria.property){
            state.filter = {
              type: "property",
              criteria: {
              }
            }
            return { ...state, filter: state.filter }
          }
          else{
            state.filter = [state.filter, {
              type: "function",
              criteria: {
                action: Array.prototype.sort,
                property: "price",
                discerner: (a, b) => a["price"] - b["price"]
              }
            }]
          }
        } else {
          state.filter = {
            type: "function",
            criteria: {
              action: Array.prototype.sort,
              property: "price",
              discerner: (a, b) => a["price"] - b["price"]
            }
          }
        }
      }
      return { ...state, filter: state.filter }
    default:
      return state;
  }
}

export const sortByTypeAction = (payload) => ({ type: SORT_BY_TYPE, payload })
export const sortByPriceAction = (payload) => ({ type: SORT_BY_PRICE, payload })
export const sortByNameAction = (payload) => ({ type: SORT_BY_NAME, payload })
export const changeProductAmountAction = (payload) => ({ type: CHANGE_PRODUCT_AMOUNT, payload })

