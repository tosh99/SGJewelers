import styles from './index.module.scss'
import {Fragment, useEffect, useState} from "react";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import Footer from "../../shared/components/footer/footer";
import Head from "next/head";
import PageHeader from "../../shared/components/page-header/page-header";
import Button from "../../shared/components/button";


export default function ExclusivelyYours() {
    const [render, set_render] = useState(1);
    const [themes, set_themes] = useState([{
        title: 'Magnificent',
        feeling_title: 'feeling magnificent',
        banner: '/images/exclusively/magnificent/banner.png',
        banner_mobile: '/images/exclusively/magnificent/banner_mobile.png',
        desc: 'Explore the poetic fusion of age-old traditions and contemporary renditions. Our jewellery, your way.',
        section_1: {
            title: 'Magri Mala',
            image: '/images/exclusively/magnificent/section_1/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Chettinad Kundan'
                }, {
                    title: 'Material',
                    desc: 'Yellow Gold'
                }, {
                    title: 'Stones',
                    desc: 'Burmese Rubies, emeralds and kundans'
                }, {
                    title: 'Inspiration',
                    desc: 'A homage to the emperor, Krishna Deva Raya who was often seen donning South Indian temple jewellery and gave Magri Mala that status it enjoys today.'
                }, {
                    title: 'Special Information',
                    desc: ' Made using ancient Burmese rubies'
                }
            ]
        },
        section_2: {
            title: 'Pacheli Bangels',
            image: '/images/exclusively/magnificent/section_2/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Pacheli / Rajasthani'
                }, {
                    title: 'Material',
                    desc: 'Yellow Gold'
                }, {
                    title: 'Stones',
                    desc: 'Kundan and pearls'
                }, {
                    title: 'Special Information',
                    desc: 'The pearls used in this bangle are Basra pearls, one of the highest grade natural pearls, originated in the Persian Gulf.'
                }
            ]
        },
        section_3: {
            title: 'Jardin Necklace',
            image: '/images/exclusively/magnificent/section_3/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Bohemian jewellery style -Uncut and unpolished stones.'
                }, {
                    title: 'Material',
                    desc: 'Yellow Gold'
                }, {
                    title: 'Stones',
                    desc: 'Emeralds, diamonds and Burmese Natural Rubies.'
                }, {
                    title: 'Inspiration',
                    desc: 'An interpretation of a Spanish Jardin in the beginning of spring, when the lush green is dotted with rich red carnations.'
                }, {
                    title: 'Special Information',
                    desc: 'The stones used in this necklace are uncut and unpolished.'
                }
            ]
        }
    }, {
        title: 'Chic',
        banner: '/images/exclusively/chic/banner.png',
        banner_mobile: '/images/exclusively/chic/banner_mobile.png',
        feeling_title: 'feeling chic',
        desc: 'Explore the poetic fusion of age-old traditions and contemporary renditions. Our jewellery, your way.',
        section_1: {
            title: 'Multi - Colour Sapphire Studs',
            image: '/images/exclusively/chic/section_1/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Modern Close Setting'
                }, {
                    title: 'Material',
                    desc: 'Rose Gold'
                }, {
                    title: 'Stones',
                    desc: 'Multi-sapphires and diamonds'
                }, {
                    title: 'Inspiration',
                    desc: 'Using the various colours of multi-sapphires to represent different facets of life'
                }
            ]
        },
        section_2: {
            title: 'Sapphire Rose Ring',
            image: '/images/exclusively/chic/section_2/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Contemporary Jewellery'
                }, {
                    title: 'Material',
                    desc: 'White Gold'
                }, {
                    title: 'Stones',
                    desc: 'Diamonds'
                }, {
                    title: 'Inspiration',
                    desc: 'Using blue diamonds to capture the celestial sky and stars in a floral bloom.'
                }, {
                    title: 'Special Information',
                    desc: 'Made using the rare blue diamonds'
                }
            ]
        },
        section_3: {
            title: 'Lariat Chain',
            image: '/images/exclusively/chic/section_3/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Contemporary Jewellery'
                }, {
                    title: 'Material',
                    desc: 'Gold'
                }, {
                    title: 'Stones',
                    desc: 'Large Morganite and diamonds'
                }, {
                    title: 'Special Information',
                    desc: 'The most sought-after peach pink hue of this morganite has rightfully earned its place as the international standard of quality. Carefully selected by Mr. Sanjay Gupta himself.'
                }
            ]
        }
    }, {
        title: 'Intimate',
        banner: '/images/exclusively/intimate/banner.png',
        banner_mobile: '/images/exclusively/intimate/banner_mobile.png',
        feeling_title: 'feeling intimate',
        desc: 'Explore the poetic fusion of age-old traditions and contemporary renditions. Our jewellery, your way.',
        section_1: {
            title: 'Twilight Drops',
            image: '/images/exclusively/intimate/section_1/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Oriental Ombre Effect'
                }, {
                    title: 'Material',
                    desc: 'Rose Gold'
                }, {
                    title: 'Stones',
                    desc: 'Pink sapphires and diamonds'
                }, {
                    title: 'Inspiration',
                    desc: 'Inspired by the colours of the setting sun washed over the pale blue sky, creating an ombre of pinks as the sun slowly disappears behind the horizon.'
                }
            ]
        },
        section_2: {
            title: 'Briolette Chandeliers',
            image: '/images/exclusively/intimate/section_2/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Chandelier Earrings'
                }, {
                    title: 'Material',
                    desc: 'White Gold'
                }, {
                    title: 'Stones',
                    desc: 'Emeralds, diamonds and briolettes'
                }, {
                    title: 'Inspiration',
                    desc: 'Contemporary take on a Maang Tika'
                }, {
                    title: 'Special Information',
                    desc: 'The emeralds used in these chandelier earrings have been sourced from Zambia, noted for their blueish-green beauty.'
                }
            ]
        },
        section_3: {
            title: 'Dream Stack',
            image: '/images/exclusively/intimate/section_3/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Tennis Bracelets'
                }, {
                    title: 'Material',
                    desc: ' White Gold'
                }, {
                    title: 'Stones',
                    desc: 'Mozambique rubies, marquise and pear diamonds  andPear, marquise and full cut diamonds / Oval diamonds.'
                }, {
                    title: 'Special Information',
                    desc: ' The red tennis bracelet is made with natural Mozambique rubies found in African mines.'
                }
            ]
        }
    }, {
        title: 'Celebratory',
        banner: '/images/exclusively/celebratory/banner.png',
        banner_mobile: '/images/exclusively/celebratory/banner_mobile.png',
        feeling_title: 'feeling celebratory',
        desc: 'Explore the poetic fusion of age-old traditions and contemporary renditions. Our jewellery, your way.',
        section_1: {
            title: 'Laurette Ring',
            image: '/images/exclusively/celebratory/section_1/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Modular Design'
                }, {
                    title: 'Material',
                    desc: 'Rose Gold'
                }, {
                    title: 'Stones',
                    desc: 'Pear, marquise and full cut diamonds'
                }
            ]
        },
        section_2: {
            title: 'Butterfly Earrings',
            image: '/images/exclusively/celebratory/section_2/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Micro Pave Setting'
                }, {
                    title: 'Material',
                    desc: 'Yellow, Rose and White Gold'
                }, {
                    title: 'Stones',
                    desc: 'Diamonds'
                }
            ]
        },
        section_3: {
            title: 'Cufflinks',
            image: '/images/exclusively/celebratory/section_3/1.png',
            is_content_visible: false,
            content: [
                {
                    title: 'Style',
                    desc: 'Art Deco'
                }, {
                    title: 'Material',
                    desc: 'White Gold'
                }, {
                    title: 'Stones',
                    desc: 'Onyx and diamonds'
                }
            ]
        }
    }]);

    const [selected_theme, set_selected_theme] = useState(0);
    const [device, set_device] = useState(2);

    useEffect(() => {
        if (screen.width <= 648) {
            set_device(0)
        }
    }, [])


    return (
        <Fragment>
            <Head>
                <title>Sanjay Gupta</title>
            </Head>
            <PageHeader title={'Exclusively Yours'}/>

            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.traditionOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.tradition} style={{
                                backgroundImage: 'url(' + (device === 0 ? themes[selected_theme].banner_mobile : themes[selected_theme].banner) + ')',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <h1>I am looking for <br/> jewellery TO <br/> compliment my mood <br/> of FEELING</h1>
                                <div className={styles.themes}>
                                    <div className={styles.themeLeft} onClick={() => {
                                        if (selected_theme > 0) {
                                            set_selected_theme(prev => prev - 1)
                                        }
                                    }}>
                                        <img src={'/images/exclusively/banner/' + (selected_theme === 0 ? 'left_disabled.svg' : 'left.svg')}/>
                                    </div>
                                    <div className={styles.themeContent}>
                                        <h2>{themes[selected_theme].title}</h2>
                                    </div>
                                    <div className={styles.themeRight} onClick={() => {
                                        if (selected_theme < themes.length - 1) {
                                            set_selected_theme(prev => prev + 1)
                                        }
                                    }}>
                                        <img src={'/images/exclusively/banner/' + (selected_theme === themes.length - 1 ? 'right_disabled.svg' : 'right.svg')}/>
                                    </div>
                                </div>


                                <header>&nbsp;</header>
                                <Button title={'SEE THE PIECES'} theme={'white_large'} onClick={() => {
                                    document.getElementById('section').scrollIntoView()
                                }}/>
                                <p>We have devised a custom filter that helps you find jewellery that matches your mood and suits your style.
                                </p>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Section 1*/}
            {/*<InView threshold={0.25} triggerOnce={true}>*/}
            {/*    {*/}
            {/*        ({ref, inView}) => (*/}
            {/*            <motion.div className={"outer " + styles.sectionOuter}*/}
            {/*                        ref={ref}*/}
            {/*                        initial={{opacity: 0}}*/}
            {/*                        animate={inView ? {opacity: 1} : {opacity: 0}}*/}
            {/*                        transition={{duration: 1}}>*/}

            <div className={"outer " + styles.sectionOuter}>
                <div className={"inner " + styles.sectionHeader} id={'section'}>
                    <h1 className={'sectionTitle'}>{themes[selected_theme].feeling_title}</h1>
                    <p className={'sectionSummary'}>{themes[selected_theme].desc}</p>
                </div>

                <div className={"inner " + styles.sectionOne}>
                    <div className={styles.sectionOneContent}>
                        <div className={styles.socLeft}>
                            <h3>{themes[selected_theme].section_1.title}</h3>
                            <img src={themes[selected_theme].section_1.image}/>
                        </div>
                        <div className={styles.socRight}>
                            {
                                !themes[selected_theme].section_1.is_content_visible &&
                                <Button theme={'gold_small'} title={'See Info'} onClick={() => {
                                    themes[selected_theme].section_1.is_content_visible = true;
                                    set_render(prev => prev + 1);
                                }}/>
                            }
                            {
                                themes[selected_theme].section_1.is_content_visible && <>
                                    <div className={styles.sectionInfo}>
                                        {
                                            themes[selected_theme].section_1.content.map((item, index) => {
                                                return <div className={styles.sInfo}>
                                                    <header>{item.title} : <span>{item.desc}</span></header>
                                                </div>
                                            })
                                        }
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className={"inner " + styles.sectionMobile}>
                    <div className={styles.smContent}>
                        <div className={styles.smTop}>
                            <h3>{themes[selected_theme].section_1.title}</h3>
                        </div>
                        <div className={styles.smSlider}>
                            <img src={themes[selected_theme].section_1.image}/>
                        </div>
                        <div className={styles.smBottom}>
                            {
                                !themes[selected_theme].section_1.is_content_visible &&
                                <Button theme={'gold_small'} title={'See Info'} onClick={() => {
                                    themes[selected_theme].section_1.is_content_visible = true;
                                    set_render(prev => prev + 1);
                                }}/>
                            }
                            {
                                themes[selected_theme].section_1.is_content_visible && <>
                                    <div className={styles.sectionInfo}>
                                        {
                                            themes[selected_theme].section_1.content.map((item, index) => {
                                                return <div className={styles.sInfo}>
                                                    <header>{item.title} : <span>{item.desc}</span></header>
                                                </div>
                                            })
                                        }
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className={"inner " + styles.sectionTwo}>
                    <div className={styles.sectionTwoContent}>
                        <div className={styles.socLeft}>
                            <h3>{themes[selected_theme].section_2.title}</h3>
                            {
                                !themes[selected_theme].section_2.is_content_visible &&
                                <Button theme={'gold_small'} title={'See Info'} onClick={() => {
                                    themes[selected_theme].section_2.is_content_visible = true;
                                    set_render(prev => prev + 1);
                                }}/>
                            }
                            {
                                themes[selected_theme].section_2.is_content_visible && <>
                                    <div className={styles.sectionInfo}>
                                        {
                                            themes[selected_theme].section_2.content.map((item, index) => {
                                                return <div className={styles.sInfo}>
                                                    <header>{item.title} : <span>{item.desc}</span></header>
                                                </div>
                                            })
                                        }
                                    </div>
                                </>
                            }
                        </div>
                        <div className={styles.socRight}>
                            <img src={themes[selected_theme].section_2.image}/>
                        </div>
                    </div>
                </div>
                <div className={"inner " + styles.sectionMobile}>
                    <div className={styles.smContent}>
                        <div className={styles.smTop}>
                            <h3>{themes[selected_theme].section_2.title}</h3>
                        </div>
                        <div className={styles.smSlider}>
                            <img src={themes[selected_theme].section_2.image}/>

                        </div>
                        <div className={styles.smBottom}>
                            {
                                !themes[selected_theme].section_2.is_content_visible &&
                                <Button theme={'gold_small'} title={'See Info'} onClick={() => {
                                    themes[selected_theme].section_2.is_content_visible = true;
                                    set_render(prev => prev + 1);
                                }}/>
                            }
                            {
                                themes[selected_theme].section_2.is_content_visible && <>
                                    <div className={styles.sectionInfo}>
                                        {
                                            themes[selected_theme].section_2.content.map((item, index) => {
                                                return <div className={styles.sInfo}>
                                                    <header>{item.title} : <span>{item.desc}</span></header>

                                                </div>
                                            })
                                        }
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <div className={"inner " + styles.sectionThree}>
                    <div className={styles.sectionOneContent}>
                        <div className={styles.socTop}>
                            <h3>{themes[selected_theme].section_3.title}</h3>
                        </div>
                        <div className={styles.socMid}>
                            <img src={themes[selected_theme].section_3.image}/>
                        </div>
                        <div className={styles.socBottom}>
                            {
                                !themes[selected_theme].section_3.is_content_visible &&
                                <Button theme={'gold_small'} title={'See Info'} onClick={() => {
                                    themes[selected_theme].section_3.is_content_visible = true;
                                    set_render(prev => prev + 1);
                                }}/>
                            }
                            {
                                themes[selected_theme].section_3.is_content_visible && <>
                                    <div className={styles.sectionInfo}>
                                        {
                                            themes[selected_theme].section_3.content.map((item, index) => {
                                                return <div className={styles.sInfo}>
                                                    <header>{item.title} : <span>{item.desc}</span></header>

                                                </div>
                                            })
                                        }
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className={"inner " + styles.sectionMobile}>
                    <div className={styles.smContent}>
                        <div className={styles.smTop}>
                            <h3>{themes[selected_theme].section_3.title}</h3>
                        </div>
                        <div className={styles.smSlider}>
                            <img src={themes[selected_theme].section_3.image}/>
                        </div>
                        <div className={styles.smBottom}>
                            {
                                !themes[selected_theme].section_3.is_content_visible &&
                                <Button theme={'gold_small'} title={'See Info'} onClick={() => {
                                    themes[selected_theme].section_3.is_content_visible = true;
                                    set_render(prev => prev + 1);
                                }}/>
                            }
                            {
                                themes[selected_theme].section_3.is_content_visible && <>
                                    <div className={styles.sectionInfo}>
                                        {
                                            themes[selected_theme].section_3.content.map((item, index) => {
                                                return <div className={styles.sInfo}>
                                                    <header>{item.title} : <span>{item.desc}</span></header>
                                                </div>
                                            })
                                        }
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/*            </motion.div>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</InView>*/}

            <Footer/>
        </Fragment>
    )
}
