import Image from 'next/image'

export const Description = () => {
    return (
        <section>
            <Image src="/img/desc.png" width={500} height={300} alt="description uxbi"></Image>
            <div>
                <h2>Uxbi Start</h2>
                <p>Una herramienta de gestion empresarial que combina eficiencia y </p>
            </div>
        </section>
    )
};
