import type { ObjectId } from "mongodb"

export interface Appointment {
  _id?: ObjectId
  patientName: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  status: "confirmed" | "pending" | "cancelled"
  notes: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Patient {
  _id?: ObjectId
  name: string
  email: string
  phone: string
  address?: string
  dateOfBirth?: string
  medicalHistory?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface Service {
  _id?: ObjectId
  title: string
  description: string
  procedures: string[]
}

export interface Testimonial {
  _id?: ObjectId
  name: string
  role: string
  content: string
}

