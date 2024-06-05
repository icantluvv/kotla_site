export default function addProduct(prop: number) {
  const body = JSON.stringify({
    lipstickId: prop,
    Quantity: 1,
  });
  console.log('Body:', body);

  fetch(`${process.env.baseApi}cart/addProductToOrder`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      lipstickId: prop,
      Quantity: 1,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка при отправке запроса');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Успешный ответ:', data);
      // Обработка успешного ответа от сервера
    })
    .catch((error) => {
      console.error('Ошибка:', error);
    });
}
