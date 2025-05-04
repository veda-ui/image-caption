"use server"

import { getCollection } from "../lib/db"

export const  upload = async function(formData){
    try{const collection = await getCollection("Image");
         const file = formData.get("file");
         if(!file){
            throw new Error("No file found")
         }
         const filebuffer = await file.arrayBuffer();
         const buffer = Buffer.from(filebuffer);
         collection.insertOne({
            file:buffer,
            filename:file.name,
            mimetype:file.type,
            size:file.size,
            createdAt:new Date()
         });
         return{
            success:true
         }
         



    }catch(error){
        throw new Error(error);
        
        
    }
}