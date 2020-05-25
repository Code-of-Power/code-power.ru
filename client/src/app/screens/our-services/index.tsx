import * as React from 'react';
import { Carousel } from '@app/components/carousel';
import { CAROUSEL_ITEMS } from '@app/consts/services';
import { CarouselItem } from '@app/components/carousel-item';
import { ScrollPanel } from '@app/components/scroll-pannel';

export function OurServices() {
  return (
    <section className="vh-100">
      <div className="container">
        <ScrollPanel leftBtn={<div>l</div>} rightBtn={<div>r</div>}>
          <Carousel
            items={CAROUSEL_ITEMS.map((item, i) => (
              <CarouselItem key={i} item={item} />
            ))}
          />
        </ScrollPanel>
      </div>
    </section>
  );
}
