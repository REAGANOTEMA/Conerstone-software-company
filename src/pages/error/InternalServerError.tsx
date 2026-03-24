import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  AlertTriangle, 
  Home, 
  RefreshCw, 
  Mail, 
  Phone, 
  ArrowLeft,
  Server,
  Database,
  Cloud,
  WifiOff,
  Bug,
  Wrench,
  Shield,
  AlertCircle,
  XCircle,
  HelpCircle,
  Activity,
  Zap,
  Power,
  Cpu,
  Monitor,
  HardDrive,
  Ethernet,
  Router,
  CloudOff,
  Thermometer,
  Gauge,
  Timer,
  Clock,
  Calendar,
  Settings,
  Download,
  Upload,
  Sync,
  RotateCw,
  Loader,
  Loader2,
  Sparkles,
  ZapOff,
  BatteryLow,
  SignalZero,
  Wifi,
  Globe,
  Earth,
  Satellite,
  Radar,
  Radio,
  Signal,
  SignalHigh,
  SignalLow,
  Pulse,
  Heartbeat,
  Brain,
  CpuChip,
  MemoryStick,
  Disc,
  FloppyDisk,
  Usb,
  Switch,
  AccessPoint,
  CloudRain,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
  CloudHail,
  Tornado,
  Wind,
  GaugeCircle,
  Speedometer,
  Tachometer,
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

const InternalServerError = () => {
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

  const systemStatus = [
    { service: 'Database Server', status: 'offline', icon: Database },
    { service: 'Application Server', status: 'overload', icon: Server },
    { service: 'Cloud Storage', status: 'degraded', icon: Cloud },
    { service: 'Network Connection', status: 'unstable', icon: WifiOff },
    { service: 'Authentication Service', status: 'maintenance', icon: Shield }
  ];

  const troubleshootingSteps = [
    'Wait a few minutes and try again',
    'Clear your browser cache and cookies',
    'Check your internet connection',
    'Try accessing the service from a different device',
    'Contact technical support if the issue persists'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'offline':
        return 'text-red-600 bg-red-100';
      case 'overload':
        return 'text-orange-600 bg-orange-100';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-100';
      case 'unstable':
        return 'text-purple-600 bg-purple-100';
      case 'maintenance':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'offline':
        return 'Offline';
      case 'overload':
        return 'Overloaded';
      case 'degraded':
        return 'Degraded';
      case 'unstable':
        return 'Unstable';
      case 'maintenance':
        return 'Maintenance';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            {/* Error Icon and Number */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center animate-pulse">
                  <Server className="w-16 h-16 text-red-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">500</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Internal Server Error
              </h1>
              <p className="text-lg text-slate-600 mb-2 max-w-2xl">
                Something went wrong on our end. Our servers are experiencing technical difficulties.
              </p>
              <p className="text-slate-500 max-w-2xl">
                Our technical team has been notified and is working to resolve the issue as quickly as possible.
              </p>
            </div>

            {/* System Status */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                System Status
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {systemStatus.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Icon className="w-5 h-5 text-slate-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">{service.service}</p>
                        <p className={`text-xs px-2 py-1 rounded-full inline-block ${getStatusColor(service.status)}`}>
                          {getStatusText(service.status)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                onClick={handleRefresh} 
                className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>
              <Button 
                variant="outline" 
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
            </div>

            {/* Troubleshooting */}
            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-orange-600" />
                What You Can Do
              </h3>
              <ol className="space-y-2">
                {troubleshootingSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Estimated Resolution Time */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Estimated Resolution
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-slate-700">
                    <strong>ETA:</strong> 15-30 minutes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-slate-700">
                    <strong>Priority:</strong> High
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '35%' }}></div>
                </div>
                <p className="text-xs text-slate-600 mt-1">Investigation in progress...</p>
              </div>
            </div>

            {/* Contact Support */}
            <div className="text-center border-t pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Need Immediate Assistance?
              </h3>
              <p className="text-slate-600 mb-4">
                Our technical support team is available 24/7 to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  1-800-TECH-SUP
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  techsupport@neterp.edu
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Live Chat
                </Button>
              </div>
            </div>

            {/* Error Details (for development) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Error Details (Development)</h4>
                <div className="text-sm text-red-700 space-y-1">
                  <p><strong>Error Code:</strong> 500</p>
                  <p><strong>Error Type:</strong> Internal Server Error</p>
                  <p><strong>Timestamp:</strong> {new Date().toISOString()}</p>
                  <p><strong>URL:</strong> {window.location.href}</p>
                  <p><strong>User Agent:</strong> {navigator.userAgent}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-slate-600">
          <p>NextERP Systems • Technical Support</p>
          <p className="mt-1">Version: 26.0.1.10</p>
        </div>
      </div>
    </div>
  );
};

export default InternalServerError;
