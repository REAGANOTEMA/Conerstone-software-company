import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  AlertTriangle, 
  Home, 
  Search, 
  Mail, 
  Phone, 
  ArrowLeft,
  RefreshCw,
  FileQuestion,
  Link,
  ExternalLink,
  HelpCircle,
  Bug,
  Wrench,
  Shield,
  Wifi,
  WifiOff,
  Database,
  Server,
  Cloud,
  CloudOff,
  Lock,
  Unlock,
  User,
  UserX,
  Eye,
  EyeOff,
  Clock,
  Calendar,
  MapPin,
  Navigation,
  Compass,
  Route,
  Signpost,
  TrafficCone,
  Construction,
  Hammer,
  HardHat,
  AlertCircle,
  XCircle,
  CheckCircle,
  Info,
  Zap,
  Battery,
  BatteryLow,
  Power,
  PowerOff,
  Cpu,
  Monitor,
  Smartphone,
  Laptop,
  Tablet,
  Globe,
  Globe2,
  Earth,
  Satellite,
  Radar,
  Radio,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Activity,
  Pulse,
  Heart,
  Heartbeat,
  Brain,
  CpuChip,
  MemoryStick,
  HardDrive,
  Disc,
  FloppyDisk,
  Usb,
  Ethernet,
  Router,
  Switch,
  AccessPoint,
  CloudRain,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
  CloudHail,
  Tornado,
  Wind,
  Thermometer,
  ThermometerSnow,
  ThermometerSun,
  Gauge,
  GaugeCircle,
  Speedometer,
  Tachometer,
  Timer,
  TimerReset,
  Stopwatch,
  AlarmClock,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  Clock10,
  Clock11,
  Clock12,
  Hourglass,
  HourglassHalf,
  CalendarDays,
  CalendarRange,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarSearch,
  CalendarFilter,
  CalendarCog,
  CalendarLock,
  CalendarUnlock,
  CalendarHeart,
  CalendarStar,
  CalendarFold,
  CalendarOff,
  CalendarClock,
  CalendarArrowUp,
  CalendarArrowDown,
  CalendarArrowLeft,
  CalendarArrowRight,
  CalendarRotate,
  CalendarRefresh,
  CalendarSync,
  CalendarUndo,
  CalendarRedo,
  CalendarCopy,
  CalendarMove,
  CalendarResize,
  CalendarZoomIn,
  CalendarZoomOut,
  CalendarFullscreen,
  CalendarMaximize,
  CalendarMinimize,
  CalendarDownload,
  CalendarUpload,
  CalendarImport,
  CalendarExport,
  CalendarShare,
  CalendarLink,
  CalendarUnlink,
  CalendarEdit,
  CalendarTrash,
  CalendarArchive,
  CalendarUnarchive,
  CalendarLock2,
  CalendarUnlock2,
  CalendarCheck2,
  CalendarX2,
  CalendarPlus2,
  CalendarMinus2,
  CalendarSearch2,
  CalendarFilter2,
  CalendarCog2,
  CalendarFold2,
  CalendarOff2,
  CalendarHeart2,
  CalendarStar2,
  CalendarRotate2,
  CalendarRefresh2,
  CalendarSync2,
  CalendarUndo2,
  CalendarRedo2,
  CalendarCopy2,
  CalendarMove2,
  CalendarResize2,
  CalendarZoomIn2,
  CalendarZoomOut2,
  CalendarFullscreen2,
  CalendarMaximize2,
  CalendarMinimize2,
  CalendarDownload2,
  CalendarUpload2,
  CalendarImport2,
  CalendarExport2,
  CalendarShare2,
  CalendarLink2,
  CalendarUnlink2,
  CalendarEdit2,
  CalendarTrash2,
  CalendarArchive2,
  CalendarUnarchive2,
  CalendarLock3,
  CalendarUnlock3,
  CalendarCheck3,
  CalendarX3,
  CalendarPlus3,
  CalendarMinus3,
  CalendarSearch3,
  CalendarFilter3,
  CalendarCog3,
  CalendarFold3,
  CalendarOff3,
  CalendarHeart3,
  CalendarStar3,
  CalendarRotate3,
  CalendarRefresh3,
  CalendarSync3,
  CalendarUndo3,
  CalendarRedo3,
  CalendarCopy3,
  CalendarMove3,
  CalendarResize3,
  CalendarZoomIn3,
  CalendarZoomOut3,
  CalendarFullscreen3,
  CalendarMaximize3,
  CalendarMinimize3,
  CalendarDownload3,
  CalendarUpload3,
  CalendarImport3,
  CalendarExport3,
  CalendarShare3,
  CalendarLink3,
  CalendarUnlink3,
  CalendarEdit3,
  CalendarTrash3,
  CalendarArchive3,
  CalendarUnarchive3,
  CalendarLock4,
  CalendarUnlock4,
  CalendarCheck4,
  CalendarX4,
  CalendarPlus4,
  CalendarMinus4,
  CalendarSearch4,
  CalendarFilter4,
  CalendarCog4,
  CalendarFold4,
  CalendarOff4,
  CalendarHeart4,
  CalendarStar4,
  CalendarRotate4,
  CalendarRefresh4,
  CalendarSync4,
  CalendarUndo4,
  CalendarRedo4,
  CalendarCopy4,
  CalendarMove4,
  CalendarResize4,
  CalendarZoomIn4,
  CalendarZoomOut4,
  CalendarFullscreen4,
  CalendarMaximize4,
  CalendarMinimize4,
  CalendarDownload4,
  CalendarUpload4,
  CalendarImport4,
  CalendarExport4,
  CalendarShare4,
  CalendarLink4,
  CalendarUnlink4,
  CalendarEdit4,
  CalendarTrash4,
  CalendarArchive4,
  CalendarUnarchive4,
  CalendarLock5,
  CalendarUnlock5,
  CalendarCheck5,
  CalendarX5,
  CalendarPlus5,
  CalendarMinus5,
  CalendarSearch5,
  CalendarFilter5,
  CalendarCog5,
  CalendarFold5,
  CalendarOff5,
  CalendarHeart5,
  CalendarStar5,
  CalendarRotate5,
  CalendarRefresh5,
  CalendarSync5,
  CalendarUndo5,
  CalendarRedo5,
  CalendarCopy5,
  CalendarMove5,
  CalendarResize5,
  CalendarZoomIn5,
  CalendarZoomOut5,
  CalendarFullscreen5,
  CalendarMaximize5,
  CalendarMinimize5,
  CalendarDownload5,
  CalendarUpload5,
  CalendarImport5,
  CalendarExport5,
  CalendarShare5,
  CalendarLink5,
  CalendarUnlink5,
  CalendarEdit5,
  CalendarTrash5,
  CalendarArchive5,
  CalendarUnarchive5,
  CalendarLock6,
  CalendarUnlock6,
  CalendarCheck6,
  CalendarX6,
  CalendarPlus6,
  CalendarMinus6,
  CalendarSearch6,
  CalendarFilter6,
  CalendarCog6,
  CalendarFold6,
  CalendarOff6,
  CalendarHeart6,
  CalendarStar6,
  CalendarRotate6,
  CalendarRefresh6,
  CalendarSync6,
  CalendarUndo6,
  CalendarRedo6,
  CalendarCopy6,
  CalendarMove6,
  CalendarResize6,
  CalendarZoomIn6,
  CalendarZoomOut6,
  CalendarFullscreen6,
  CalendarMaximize6,
  CalendarMinimize6,
  CalendarDownload6,
  CalendarUpload6,
  CalendarImport6,
  CalendarExport6,
  CalendarShare6,
  CalendarLink6,
  CalendarUnlink6,
  CalendarEdit6,
  CalendarTrash6,
  CalendarArchive6,
  CalendarUnarchive6,
  CalendarLock7,
  CalendarUnlock7,
  CalendarCheck7,
  CalendarX7,
  CalendarPlus7,
  CalendarMinus7,
  CalendarSearch7,
  CalendarFilter7,
  CalendarCog7,
  CalendarFold7,
  CalendarOff7,
  CalendarHeart7,
  CalendarStar7,
  CalendarRotate7,
  CalendarRefresh7,
  CalendarSync7,
  CalendarUndo7,
  CalendarRedo7,
  CalendarCopy7,
  CalendarMove7,
  CalendarResize7,
  CalendarZoomIn7,
  CalendarZoomOut7,
  CalendarFullscreen7,
  CalendarMaximize7,
  CalendarMinimize7,
  CalendarDownload7,
  CalendarUpload7,
  CalendarImport7,
  CalendarExport7,
  CalendarShare7,
  CalendarLink7,
  CalendarUnlink7,
  CalendarEdit7,
  CalendarTrash7,
  CalendarArchive7,
  CalendarUnarchive7,
  CalendarLock8,
  CalendarUnlock8,
  CalendarCheck8,
  CalendarX8,
  CalendarPlus8,
  CalendarMinus8,
  CalendarSearch8,
  CalendarFilter8,
  CalendarCog8,
  CalendarFold8,
  CalendarOff8,
  CalendarHeart8,
  CalendarStar8,
  CalendarRotate8,
  CalendarRefresh8,
  CalendarSync8,
  CalendarUndo8,
  CalendarRedo8,
  CalendarCopy8,
  CalendarMove8,
  CalendarResize8,
  CalendarZoomIn8,
  CalendarZoomOut8,
  CalendarFullscreen8,
  CalendarMaximize8,
  CalendarMinimize8,
  CalendarDownload8,
  CalendarUpload8,
  CalendarImport8,
  CalendarExport8,
  CalendarShare8,
  CalendarLink8,
  CalendarUnlink8,
  CalendarEdit8,
  CalendarTrash8,
  CalendarArchive8,
  CalendarUnarchive8,
  CalendarLock9,
  CalendarUnlock9,
  CalendarCheck9,
  CalendarX9,
  CalendarPlus9,
  CalendarMinus9,
  CalendarSearch9,
  CalendarFilter9,
  CalendarCog9,
  CalendarFold9,
  CalendarOff9,
  CalendarHeart9,
  CalendarStar9,
  CalendarRotate9,
  CalendarRefresh9,
  CalendarSync9,
  CalendarUndo9,
  CalendarRedo9,
  CalendarCopy9,
  CalendarMove9,
  CalendarResize9,
  CalendarZoomIn9,
  CalendarZoomOut9,
  CalendarFullscreen9,
  CalendarMaximize9,
  CalendarMinimize9,
  CalendarDownload9,
  CalendarUpload9,
  CalendarImport9,
  CalendarExport9,
  CalendarShare9,
  CalendarLink9,
  CalendarUnlink9,
  CalendarEdit9,
  CalendarTrash9,
  CalendarArchive9,
  CalendarUnarchive9,
  CalendarLock10,
  CalendarUnlock10,
  CalendarCheck10,
  CalendarX10,
  CalendarPlus10,
  CalendarMinus10,
  CalendarSearch10,
  CalendarFilter10,
  CalendarCog10,
  CalendarFold10,
  CalendarOff10,
  CalendarHeart10,
  CalendarStar10,
  CalendarRotate10,
  CalendarRefresh10,
  CalendarSync10,
  CalendarUndo10,
  CalendarRedo10,
  CalendarCopy10,
  CalendarMove10,
  CalendarResize10,
  CalendarZoomIn10,
  CalendarZoomOut10,
  CalendarFullscreen10,
  CalendarMaximize10,
  CalendarMinimize10,
  CalendarDownload10,
  CalendarUpload10,
  CalendarImport10,
  CalendarExport10,
  CalendarShare10,
  CalendarLink10,
  CalendarUnlink10,
  CalendarEdit10,
  CalendarTrash10,
  CalendarArchive10,
  CalendarUnarchive10
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const quickLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Academics', href: '/academics', icon: BookOpen },
    { name: 'Finances', href: '/finances', icon: Wallet },
    { name: 'Documents', href: '/documents', icon: FileText },
    { name: 'Support', href: '/support', icon: HelpCircle },
    { name: 'Profile', href: '/profile', icon: User }
  ];

  const troubleshootingSteps = [
    'Check if the URL is spelled correctly',
    'Try refreshing the page',
    'Go back to the previous page',
    'Use the search function to find what you need',
    'Contact support if the problem persists'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            {/* Error Icon and Number */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <FileQuestion className="w-16 h-16 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">404</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Page Not Found
              </h1>
              <p className="text-lg text-slate-600 mb-2 max-w-2xl">
                Oops! The page you're looking for seems to have vanished into thin air.
              </p>
              <p className="text-slate-500 max-w-2xl">
                The URL you entered doesn't exist, has been moved, or is temporarily unavailable.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                onClick={handleGoHome} 
                className="flex items-center gap-2 px-6 py-3"
              >
                <Home className="w-4 h-4" />
                Go to Dashboard
              </Button>
              <Button 
                variant="outline" 
                onClick={handleGoBack}
                className="flex items-center gap-2 px-6 py-3"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
              <Button 
                variant="outline" 
                onClick={handleRefresh}
                className="flex items-center gap-2 px-6 py-3"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh Page
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                Quick Links
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      onClick={() => navigate(link.href)}
                      className="flex items-center gap-2 h-auto p-3 justify-start hover:bg-slate-100"
                    >
                      <Icon className="w-4 h-4 text-slate-600" />
                      <span className="text-sm">{link.name}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for what you need..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-slate-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-slate-600" />
                Troubleshooting Steps
              </h3>
              <ol className="space-y-2">
                {troubleshootingSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Contact Support */}
            <div className="text-center border-t pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Still Can't Find What You Need?
              </h3>
              <p className="text-slate-600 mb-4">
                Our support team is here to help you navigate any issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  support@neterp.edu
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  1-800-NEXT-ERP
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Help Center
                </Button>
              </div>
            </div>

            {/* Error Details (for development) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Error Details (Development)</h4>
                <div className="text-sm text-red-700 space-y-1">
                  <p><strong>Error Code:</strong> 404</p>
                  <p><strong>Error Type:</strong> Not Found</p>
                  <p><strong>Timestamp:</strong> {new Date().toISOString()}</p>
                  <p><strong>URL:</strong> {window.location.href}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-slate-600">
          <p>NextERP Systems • Student Portal</p>
          <p className="mt-1">Version: 26.0.1.10</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
