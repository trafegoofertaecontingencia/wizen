export default function Footer() {
    return (
        <footer className="h-24 bg-[#333] flex justify-center items-center text-white">
            <p>&copy; {new Date().getFullYear()} Wizen. Todos os direitos reservados.</p>
        </footer>
    )
}