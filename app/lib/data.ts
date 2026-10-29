import postgres from "postgres";
import { Program } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchXios() {
  try {
    const xiosData = await sql<Program[]>`
      SELECT * FROM Programs WHERE Programs.slug = 'xios'
    `;
    return xiosData[0];
  } catch (error) {
    console.log(error);
    throw new Error("You have failed to fetch data");
  }
}

export async function fetchYouthPass() {
  try {
    const YouthPassData = await sql<Program[]>`
      SELECT * FROM Programs WHERE Programs.slug = 'youth-pass'
    `;
    return YouthPassData[0];
  } catch (error) {
    console.log(error);
    throw new Error("You have failed to fetch data");
  }
}

export async function fetchSocial() {
  try {
    const socialTourismData = await sql<Program[]>`
      SELECT * FROM Programs WHERE Programs.slug = 'social-tourism'
    `;
    return socialTourismData[0];
  } catch (error) {
    console.log(error);
    throw new Error("You have failed to fetch data");
  }
}

export async function fetchTFA() {
  try {
    const TFAData = await sql<Program[]>`
      SELECT * FROM Programs WHERE Programs.slug = 'tourism-for-all'
    `;
    return TFAData[0];
  } catch (error) {
    console.log(error);
    throw new Error("You have failed to fetch data");
  }
}

export async function fetchEU() {
  try {
    const EUData = await sql<Program[]>`
      SELECT * FROM Programs WHERE Programs.slug = 'eu-pass'
    `;
    return EUData[0];
  } catch (error) {
    console.log(error);
    throw new Error("You have failed to fetch data");
  }
}
