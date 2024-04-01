export default function HeaderTitle({ title, label }) {
    return (
        <div
            className="h-80
     w-screen bg-special-blue flex  flex-col gap-y-4
      items-center justify-center text-white text-5xl md:h-60 text-center"
        >
            <h2 className="cursor-default">{title}</h2>
            <h4 className="text-lg cursor-default">
                {label ? label : "Home" + " > " +  title }
            </h4>
        </div>
    );
}
