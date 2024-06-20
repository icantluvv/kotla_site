export default function MakeOrder() {
  fetch(`${process.env.baseApi}order/post`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
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
