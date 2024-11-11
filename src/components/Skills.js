export default function Skills() {

    const expertise = [
        "JavaScript",
        "HTML",
        "CSS",
        "PHP",
        "React",
        "jQuery",
        "Bootstrap",
        "Laravel",
        "Opencart",
        "MySQL",
        "WordPress",
        "Shopify",
        "SEO optimization",
        "Performance auditing",
        "Analytics integration",
        "Git version control"
    ];
    return (
        <>

            {expertise.map(data =>
                <div class=" skills-btn btn-1"><span>{data}</span></div>
            )

            }
        </>
    )
}