export function Login(
  email: string,
  password: string,
): Promise<{ token: string }> {
  return new Promise<{ token: string }>((resolve, reject) => {
    fetch(`${process.env.baseApi}auth/login`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
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
        const role = data.roles.role;
        console.log(data);
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        resolve(data);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        reject(error);
      });
  });
}
