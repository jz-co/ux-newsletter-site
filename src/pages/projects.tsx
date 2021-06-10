import Head from 'next/head';
import { Stack, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const { t } = useTranslation();
    return (
        <Container>
            <Head>
                <title>Projects</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Stack
                as='main'
                spacing={8}
                justifyContent='center'
                alignItems='flex-start'
                m='0 20px 4rem 20px'
                maxWidth='1220px'
            >
                <Flex w='100%' justifyContent='center' alignItems='flex-start'>
                    <Heading as='h1'>{t('pages.projects')}</Heading>
                </Flex>
                <SimpleGrid columns={3} spacing={10}>
                    <ProjectCard
                        name='Project X'
                        img={{ src: '/assets/map.png', alt: 'Image of Map' }}
                        to='/about'
                    />
                    <ProjectCard
                        name='Project Y'
                        img={{ src: '/assets/map.png', alt: 'Image of Map' }}
                        to='/about'
                    />
                </SimpleGrid>
            </Stack>
        </Container>
    );
}
