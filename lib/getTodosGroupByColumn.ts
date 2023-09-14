import { databases } from "@/appwrite"
import { Column, TypedColumn } from "@/typings";

export const getTodosGroupByColumn = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_TODOS_ID!
    );

    const todos= data.documents;

    {/* grouped by status (todo, inprogress, done) */}
    const columns = todos.reduce((acc, todo)=>{
        if(!acc.get(todo.status)){
            acc.set(todo.status,{
                id: todo.status,
                todos :[]
            })
        }

        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $createdAt: todo.$createdAt,
            title: todo.title,
            status: todo.status,
            ... (todo.image && {image: JSON.parse(todo.image)})    
        });

        return acc;

    }, new Map<TypedColumn, Column>)

    console.log(columns);
}

