import { useMediaQuery, useTheme } from '@mui/material';
import { GetAntiqueById } from '../../services/antiqueService';
import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom';
import ImageCarousel from '../Carousel/Carousel';
import { useEffect } from 'react';
import type { Antique } from '../../services/models/antique';
import NavigateBack from '../Common/NavigateBack';
import { CarouselWrapperMobile, FlexColumnWrapper, GridWrapperDesktop, ItemName, Price, OrBestOffer, InformationWrapper, EnquireButton, FlexGrowSpacer } from './AntiqueDetails.styling';
import ExpandableMarkdown from '../Common/ExpandableMarkdown';
import { OutletContainer } from '../Common/Common.styling';

interface AntiqueLoaderParams {
  id: string;
}

export async function loader({ params }: LoaderFunctionArgs<AntiqueLoaderParams>) {
  const antique = await GetAntiqueById(Number(params.id));
  if (!antique) {
    throw new Response("", {
      status: 404,
      statusText: "Antique Not Found"
    });
  }
  return { antique };
}

function AntiqueDetails() {
  const theme = useTheme();
  const onMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  
  const { antique } : { antique : Antique } = useLoaderData();

  const toEmail: string = "joe.lambon25@gmail.com";
  const subject: string = encodeURIComponent(`Enquiry - ${antique.name}`);
  const body: string = encodeURIComponent(`Hi,\n\nI would like to enquire about your listing '${antique.name}' (#${antique.id}). \n\n`);
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const formattedPrice = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
      antique.price,
    )
    
    return (
        <OutletContainer maxWidth='lg' addpadding="true">
            {onMobile ? (
              <FlexColumnWrapper>
                <NavigateBack label={antique.name} />
                <CarouselWrapperMobile>
                  <ImageCarousel images={antique.images} />
                </CarouselWrapperMobile>
                <InformationWrapper onMobile={onMobile}>
                  <ItemName variant='h3'><b>{antique.name}</b></ItemName>
                  <Price variant='h3'><b>{formattedPrice}</b></Price>
                  <OrBestOffer variant='h5'><b>or best offer</b></OrBestOffer>
                  
                  <ExpandableMarkdown description={antique.description} />
                </InformationWrapper>
                <FlexGrowSpacer />
                <EnquireButton
                onMobile={onMobile}
                onClick={() => window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`}
                size='large' 
                variant='contained'
                color="secondary"
                >
                  Enquire
                </EnquireButton>
              </FlexColumnWrapper>
              ) : (
                <>
                  <NavigateBack label={antique.name} />
                  <GridWrapperDesktop >
                    <ImageCarousel images={antique.images} />
                    <InformationWrapper onMobile={onMobile}>
                      <ItemName variant='h4'><b>{antique.name}</b></ItemName>
                      <Price variant='h4'><b>{formattedPrice}</b></Price>
                      <OrBestOffer variant='h6'><b>or best offer</b></OrBestOffer>

                      <EnquireButton
                        onMobile={onMobile}
                        size='medium'
                        variant='contained'
                        color="secondary"
                        onClick={() => window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`}
                      >
                          Enquire
                      </EnquireButton>

                      <ExpandableMarkdown description={antique.description} />
                      
                    </InformationWrapper>
                  </GridWrapperDesktop>
                </>
              )
            }
        </OutletContainer>
    )
}

export default AntiqueDetails;