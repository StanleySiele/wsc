/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Secure',
    description:
      'Your data is secured using AES 256-bit military grade encryption.\nOur special security team is dedicated to securing your data, and you can sue us if your data gets breached.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Your first check is absolutely free aside from Ethereum gas fees, which are charged 100% by the network and not by us. Your subsequent checks are flat-rated at exactly $0.3 per check, with no hidden fees whatsoever.',
    icon: ScaleIcon,
  },
  {
    name: 'Extremely fast',
    description:
      'Our proprietery transaction backtracing software modeled on Chainalysis provides result as fast as 500 milliseconds on Ethereum blockchain.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Extremely Reliable',
    description:
      'We are accredited by the European Institute of Management and Finances.',
    icon: AnnotationIcon,
  },
]

export default function Why() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why WalletChecker</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Reasons to prefer us
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Why you should choose WalletChecker
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
