import mongoose from "mongoose";

export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

type ConnectionProps = {
  isConnected?: any;
};
const connection: ConnectionProps = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO as unknown as string);
    connection.isConnected = db.connections[0].readyState;
    console.log("hello", db.connections[0].readyState);
  } catch (e) {
    console.log(e);
    // throw new Error(e?);
  }
};
