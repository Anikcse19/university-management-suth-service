import mongoose from "mongoose";
import app from "./app";
import conifg from "./config/index"


async function bootstrap() {
  try {
    await mongoose.connect(conifg.database_url as string);
    console.log("Database is connected successfully");
    app.listen(conifg.Port, () => {
      console.log(`Server listening at port ${conifg.Port}`);
    });
  } catch (err) {
    console.log("Failed to connect", err);
  }
}

bootstrap();
