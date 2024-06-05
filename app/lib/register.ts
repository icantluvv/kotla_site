export async function Register(
  email: string,
  Phone: string,
  Nickname: string,
  password: string,
): Promise<{ token: string }> {
  return new Promise<{ token: string }>((resolve, reject) => {
    fetch(`${process.env.baseApi}auth/register`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        Phone,
        Nickname,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при отправке запроса');
        }
        return response.json();
      })
      .then((data) => {
        const token = data.token;
        localStorage.setItem('token', token);
        resolve(data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        reject(error);
      });
  });
}