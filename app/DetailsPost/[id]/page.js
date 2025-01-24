import DynamicData from "@/app/PostData/DynamicData";

const Details = async({params}) => {
    const {id} = params;
    const data = await DynamicData(id)
    return (
        <div>
            <div className="border-2 lg:w-3/6 mx-auto border-blue-600 m-20 p-5 text-center">
            <p className="text-xl font-bold text-blue-600">Title: {data.title}</p>
                <p className="text-lg font-semibold">Post: {data.id}</p>
            <p>Title: {data.body}</p>
            </div>
        </div>
    );
};

export default Details;