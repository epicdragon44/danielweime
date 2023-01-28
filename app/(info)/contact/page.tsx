import {
    Coffee,
    Mail,
    Linkedin,
    GitHub,
    Instagram,
    Twitter,
} from "react-feather";

export default function Page() {
    return (
        <article className='prose prose-md'>
            <br />
            <h3>Get in Touch!</h3>
            <ul className='[&>li]:list-none [&>li]:-ml-4'>
                <li>
                    <a
                        className='flex flex-row gap-2 items-center'
                        href='https://cal.com/danielwei15/coffee-chat'
                    >
                        <Coffee /> Book a Coffee Chat with me!
                    </a>
                </li>
                <li>
                    <a
                        className='flex flex-row gap-2 items-center'
                        href='mailto:dlw266@cornell.edu'
                    >
                        <Mail />
                        Send me an email!
                    </a>
                </li>
            </ul>
            <h3>Socials</h3>
            <ul className='[&>li]:list-none [&>li]:-ml-4'>
                <li>
                    <a
                        className='flex flex-row gap-2 items-center'
                        href='https://www.linkedin.com/in/weidaniel15/'
                    >
                        <Linkedin /> LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        className='flex flex-row gap-2 items-center'
                        href='https://github.com/epicdragon44'
                    >
                        <GitHub /> GitHub
                    </a>
                </li>
                <li>
                    <a
                        className='flex flex-row gap-2 items-center'
                        href='https://www.instagram.com/danielwei15/'
                    >
                        <Instagram /> Instagram
                    </a>
                </li>
                <li>
                    <a
                        className='flex flex-row gap-2 items-center'
                        href='https://twitter.com/fromdanielwei15'
                    >
                        <Twitter /> Elon&apos;s Bird Site
                    </a>
                </li>
            </ul>
        </article>
    );
}
