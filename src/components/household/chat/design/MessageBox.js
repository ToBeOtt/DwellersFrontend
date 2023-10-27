export default function MessageBox(props, {children}) {
    return (
        <>
            <section className={`${props.currentUser === props.messageSender ? 
            'mr-5 border-x-2 border-hh pb-1 pt-2 my-2 bg-[#F6F3EC] w-full xl:w-[25vw] rounded font-style: italic'
            : 
            'ml-5 border-x-2 border-blue-500 pb-1 pt-2 my-2 bg-stone-100 w-full 2xl:w-[25vw] rounded font-style: italic'}`}
            >
                {props.children}
            </section>
        </>
    )
};
