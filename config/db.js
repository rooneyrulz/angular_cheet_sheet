import mongoose from 'mongoose';

export default async () => {
    try {
        const con = await mongoose.connect(
          'mongodb://ruzny:ruzny123@ds253368.mlab.com:53368/angular_cheat_sheet',
          {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
          }
        );
        if (con) console.log('connecting to mongodb!');
    } catch (error) {
        throw error.message;
    }
};