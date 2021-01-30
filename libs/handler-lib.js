export default function handler(lambda){
    return async function(event, context){
        let body, statusCode;
        try{
            // Run the lambda
            body = await lambda(event,context);
            statusCode=200;
        }
        catch (e){
            console.log(e);
            body = {error:e.message};
            statusCode=500;
        }
        return{
            statusCode,
            body: JSON.stringify(body),
        };
    };
}