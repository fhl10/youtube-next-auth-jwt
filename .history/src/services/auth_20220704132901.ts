import { v4 as uuid } from 'uuid'

type SignInRequestData = {
  email: string;
  password: string;
}
// simulando a demora da busca com o backend
const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Fernando',
      email: 'fernandoleite@univoxfibraoptica.com.br',
      
    }
  }
}

export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar_url: 'https://github.com/diego3g.png'
    }
  }
}