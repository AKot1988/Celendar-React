import { Timestamp } from "firebase/firestore";

export type userDataProps = {
birthdate: string,
created_at: string | Timestamp,
email: string,
events: string,
gender: string,
name: string,
password: string,
role: string,
updated_at: string | Timestamp,
photoURL?: string,
}