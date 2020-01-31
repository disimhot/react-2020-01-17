export const selectCartInfo = state => {
  const {cart, restaurants} = state
  const orderedDishes = restaurants.reduce(
    (result, restaurant) => {
      restaurant.menu.forEach(dish => {
        const amount = cart[dish.id]
        if (amount) {
          const totalDishPrice = amount * dish.price
          result.totalPrice += totalDishPrice
          result.dishes.push({
            dish,
            amount,
            totalDishPrice,
          })
        }
      })
      return result
    },
    {
      dishes: [],
      totalPrice: 0,
    }
  )

  return {
    orderedDishes,
  }
}
