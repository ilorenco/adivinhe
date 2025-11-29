type Props = React.ComponentProps<"input">

export function Input({ ...props }: Props) {
    return <input 
    type="text" 
    className="w-11 h-11 rounded-md border-2 border-[#6363db] uppercase text-center text-base font-bold outline-none text-[#6363db]" 
    {...props} 
    />

}