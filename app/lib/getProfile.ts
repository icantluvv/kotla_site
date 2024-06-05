export async function getProfile(): Promise<Profile> {
  const response = await fetch(`${process.env.baseApi}user/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    cache: 'no-store',
    credentials: 'same-origin',
  });
  const data = await response.json();

  const profile: Profile = {
    id: data.id,
    email: data.email,
    password: data.password,
    Nickname: data.Nickname,
    Phone: data.Phone,
  };

  return profile;
}
