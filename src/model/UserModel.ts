export interface UserModel {
  name: string
  age: string
  job: string
  location: string
  home: string
  bio: string
  about: About[]
}

export interface About {
  id: string
  title: string
  iconName: string
}
