import { RiCloseLine, RiDeleteBinLine, RiPencilLine, RiRefreshLine } from '@remixicon/react';
import React,{useState} from 'react'

export default function ProductFeaturesForm({features, setFeatures}) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [editName, setEditName] = useState("feature name");
    const [editDesc, setEditDesc] = useState("feature description");
    const [editableIndex, setEditableIndex] = useState(null);

    const handleClick= (e) => {
        e.preventDefault();
        if(name !== "" && desc !== "") {
            const feature = {
                name: name,
                description: desc
            }
            setFeatures([...features, feature]);
            setName("");
            setDesc("");
        }
    }

    const handleEdit = (e, index) => {
        e.preventDefault();
        setEditableIndex(index);
        setEditName(features[index].name);
        setEditDesc(features[index].desc);
    }

    const handleCancelEdit = (e) => {
        e.preventDefault();
        setEditableIndex(null);
        setEditName("feature name");
        setEditDesc("feature description");
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if(editName !== "" && editDesc !== "") {
            const updatedFeatures = features.map((feature, index) => {
                if(editableIndex === index) {
                    return {
                        name: editName,
                        description: editDesc,
                    }
                }
                return feature;
            });
            setFeatures(updatedFeatures);
            handleCancelEdit(e);
        }
    }

    const handleFeatureDelete = (e, featureIndex) => {
        e.preventDefault();
        setFeatures(features.filter((_,index) => index !== featureIndex));
    }

    return (
        <div className="h-auto w-auto">
            <div className="h-auto w-full flex flex-wrap flex-col md:flex-row gap-3 md:gap-5 mt-3 md:mt-5">
                <input
                    type="text"
                    name="feature-name"
                    placeholder="feature name"
                    autoComplete="off"
                    value={name}
                    onChange={e=>{setName(e.target.value)}}
                    className="w-full md:w-1/5 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
                />
                <textarea
                    type="text"
                    name="feature description"
                    placeholder="feature description"
                    autoComplete="off"
                    value={desc}
                    rows={1}
                    onChange={e=>{setDesc(e.target.value)}}
                    className="w-full md:w-1/2 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent resize-none"
                />
                <div className="h-full w-full md:w-auto flex justify-start">
                    <button onClick={handleClick} className="w-auto bg-black text-white text-sm cursor-pointer px-5 py-2 rounded-lg">add</button>
                </div>
            </div>
            {features.length > 0 && <div className="h-auto mt-10 w-full">
                <h1 className="text-base">Review the features</h1>
                <div className="h-[0.1px] w-36 bg-black mb-3"></div>
                {features.map((feature, index) => (<div key={index} className="flex flex-col gap-2 md:gap-3 md:items-start md:flex-row py-2 mb-3 md:mb-0">
                    <input
                        type="text"
                        name="feature-name"
                        value={editableIndex === index ? editName : feature.name}
                        disabled={editableIndex !== index}
                        onChange={e=>setEditName(e.target.value)}
                        className={`w-full md:w-[30%] ${editableIndex === index ? `bg-zinc-50` : `bg-zinc-100 text-zinc-500`} py-2 px-5 rounded-lg outline-none`}
                    />
                    <textarea
                        value={editableIndex === index ? editDesc : feature.description}
                        rows={1}
                        disabled={editableIndex !== index}
                        onChange={e=>setEditDesc(e.target.value)}
                        className={`${editableIndex === index ? `bg-zinc-50` : `bg-zinc-100 text-zinc-500`} w-full md:w-[60%] py-2 px-5 rounded-lg resize-none outline-none`}
                    />
                    <div className="w-full hidden md:w-[10%] md:flex py-2 px-2 justify-center gap-3 md:mt-0">
                        {editableIndex !== index ? (<div onClick={(e) => {handleEdit(e, index)}} className="cursor-pointer text-blue-500"><RiPencilLine/></div>
                        ) : (
                            <div onClick={handleUpdate} className="cursor-pointer text-blue-500"><RiRefreshLine /></div>
                        )}
                        {editableIndex !== index ? (<div onClick={(e) => {handleFeatureDelete(e, index)}} className="cursor-pointer text-red-500"><RiDeleteBinLine /></div>
                        ): (
                            <div onClick={handleCancelEdit} className="cursor-pointer text-red-500"><RiCloseLine /></div>
                        )}
                    </div>
                    <div className="w-full md:hidden md:w-[10%] flex gap-3 md:mt-0">
                        {editableIndex !== index ? (<h1 onClick={(e) => {handleEdit(e, index)}} className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg">Edit</h1>
                        ):(
                            <h1 onClick={handleUpdate} className="px-5 py-2 text-white font-medium rounded-lg bg-blue-500">Update</h1>
                        )}
                        {editableIndex !== index ? (<h1 onClick={(e) => {handleFeatureDelete(e, index)}} className="px-5 bg-red-500 py-2 text-white font-medium rounded-lg">Delete</h1>
                        ): (
                            <h1 onClick={handleCancelEdit} className="px-5 bg-red-500 py-2 text-white font-medium rounded-lg">Cancel</h1>
                        )}
                    </div>
                </div>))}
            </div>}
        </div>
    );
}
