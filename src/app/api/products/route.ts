import { NextResponse } from 'next/server';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string,
  category: string;
}

const products: Product[] = [
  { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1', price: 10.00, category: 'Categoria A', imageUrl: "https://s3-alpha-sig.figma.com/img/1164/983c/339444a5a4c293835663f2b19c6240e3?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OXC6DcO51vE60vRZ~Mn2-~iIStl7Fx2TklgOH-uX6di~BXi-ebSVbmqzexagvqp8zRRdwFgiIMr2G-poGLH4EU1KpRk27x6-EuW0qKpl~QLJ7ZNypq55uodHIGKOjeshcE3PK6TGoo8~z1HOn1r-ItRx73FhKFgQ-zLPcdN5a9buGcgZjjyv~6veZXXSBij1-SY-yCcTXcKm045vyKnXFe17cjip~lDZugn4pgFCJRqvYPJa6~ujrxAH4OgG92x8QdaKccdCIYhHFopnmTuEmFT23E1-8pgxiHrwcIDVFpShqWM5ExnhhmQnOz08JyOy2XVN1~eZh7HeskHKwAORvA__" },
  { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2', price: 20.00, category: 'Categoria B' , imageUrl: "https://s3-alpha-sig.figma.com/img/bc75/8a3c/3d70346c28596c6024bf93b9a54ad84a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0MBE-0Ul4tIJSMR7wePGs5n9GLPS~CAEYCio2gLbpNoCyq5WngZspz7ASpcGbJJFNDjMwi5RNW4md1wOc6MJWKcx7m-qu3RqMofBlW21Ssr5IemebD0P1NN803d~vMAaSEp0r~b6jSVrJrGs5UjbKIG34uhBhK578RLfbfQHC7MRV3GhBGhd1uuYC8rDrYNUt779otu3B3n3POaCjh7qkOsoRK1Z1tUxVEzjUGQjd8Ot0Iitp6BAmQzG7-1qznwwKRGjcWLIvw1DtNj~l1dm3ojuWmuIGc-167tNa3-Jh5cQQXPzy8QsaKXc6Hhd-TSPABJ4WxCcS6hxEaxr-ms5w__"},
  { id: 3, name: 'Produto 3', description: 'Descrição do Produto 3', price: 30.00, category: 'Categoria A' , imageUrl: "https://s3-alpha-sig.figma.com/img/db91/0dc7/2825c86b70d9484504889c901a465a39?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LQQTeLgLBRUZk8uXvQ5Icuk0rq66FR-kXOhtyjiJ0NvUpynAHIJPj9vKtI5UxRFHE5c7ijITZFddbZszClMlzDlCbpuK8694CmFVimuL2cJ11MjpWoP~hK509xBO88EjWg4vgloHObif9V36mLn9ZUr~8ovN-nPhFg3Ath-~4AhbYnZQZHhl~VpArE5ErRsdBVkhb~lTDkS7Qv86mvUs8nSWgZNkwlGozsUcqYykdpGlHNtpx89Y3EiqevTKeAX41xDU7T7ocSOcF8ZdPMTdE7dG~9PIS1qsF4UkYF0yDSS7nU-sFMpC2MzsDlVMjAeVULnKNW5ngAA8JduokQn1Fw__"},
];

export async function GET() {
  return NextResponse.json(products);
}
